const bcrypt = require('bcrypt') // https://www.npmjs.com/package/bcrypt
const saltRounds = 10
const axios = require('axios')
require('dotenv').config()

// SNS
const AWS = require('aws-sdk');
// create SNS object
const config = { 
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    sessionToken: process.env.AWS_SESSION_TOKEN
  };
AWS.config.update(config)
const TOPIC_ARN = "arn:aws:sns:us-east-1:805096564949:RememberToStudy"

// Might have to start over, prof said use OAuth
//https://www.techtarget.com/searchapparchitecture/definition/OAuth
// https://oauth.net/getting-started/
// https://oauth.net/code/nodejs/
// https://aaronparecki.com/oauth-2-simplified/

const login = async (req, res)=>{
    // get variables from req
    const {password, email} = req.body
    console.log("testing", password, email)

    // load hash from database   
    const response = await axios.get(process.env.URL+'/api/users/find/'+email)

    if(response.status===200){
    // get hash from response
    try{
        const hash = response.data[0].password
        console.log(hash+"  "+password)

        // compare password to hash in database
        const result = await bcrypt.compare(password, hash)
        console.log(response.data)
       if(result){
            // send token
            res.status(200).json({token: 'testing123', userId: response.data[0].id, pages:response.data[0].pages}) // still need to come up with correct token
        }else{
            res.status(400).json({error: "wrong password"})
        }

    }catch(e){
        console.log(e.message)
        res.status(500).json({error: e.message})
    }

}else{
    res.status(response.status).json({error: "Not found in database: "+response.statusText})
}
}

const runSNS = async (params) => {
    // Create SNS service object.
    const sns = new AWS.SNS();

    sns.subscribe(params, (err, data) => {
        if (err) console.log(err);
        else console.log(data);
      });
  }

const register = async (req, res)=>{
    // get variables from req
    const {pass, email, name} = req.body
    
    // hash received password
    bcrypt.hash(pass, saltRounds).then( async (hash)=> {
        const password = hash
        const user = {name, email, password, pages:[]}
        // Store hash in database
        const response = await axios.post(process.env.URL+'/api/users/', user)

        if(response.status===200){
            console.log(response.data)

            try{
                // subscribe to SNS - * Not working bc need credentials *
                const params = {
                    Protocol: "email" /* required */,
                    TopicArn: TOPIC_ARN, //TOPIC_ARN
                    Endpoint: email, //EMAIL_ADDRESS
                    };
                runSNS(params);
            }catch(e){
                console.log("Failed to subscribe to sns")
                console.log(e.message)
            }
            // send token
            res.status(200).json({ token: 'testing123', userId: response.data.id, pages:response.data.pages})
        }else{
            res.status(400).json({error:"registration failed"})
        }
    }).catch(e=>{
        console.log(e)
        res.status(500).json({error: e.message})
    })
}

module.exports = {
    login,
    register
}