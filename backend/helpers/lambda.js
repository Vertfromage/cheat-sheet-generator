// I'm going to try to put all the lambda access code in here.. 
// then I can have multiple lambda functions and all call them with this.
// If this doesn't work I'll just put it directly in the controller file.. but I think it might work.
// https://stackoverflow.com/questions/33659059/invoke-amazon-lambda-function-from-node-app 
// (not sure about how they did error handling, I'm just going to go ahead and use a try catch block)

const AWS = require('aws-sdk')

const lambda = new AWS.Lambda()

const callLambda = async (operation, payLoad) => {
    const params = {
        FunctionName: 'PageLambda',
        Payload: payLoad,
        Operation: operation
    }

    try{
        const response = await lambda.invoke(params).promise()
        return JSON.parse(response.Payload)
    }catch(error){
        console.error(error)
    }
} 

module.exports = callLambda