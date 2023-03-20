const bcrypt = require('bcrypt') // https://www.npmjs.com/package/bcrypt
const saltRounds = 10
const axios = require('axios')
require('dotenv').config()

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