require('dotenv').config()
const express = require('express')
const dynamoose = require('dynamoose')
const formulaRoutes = require('./routes/FormulaRoutes')

// express app
const app = express() 

// middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// routes - need the path localhost:4000/api/formulas/
app.use('/api/formulas', formulaRoutes)

// // Create new DynamoDB instance
// const ddb = new dynamoose.aws.ddb.DynamoDB({
//     "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
//     "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
//     "region": process.env.AWS_REGION,
//     "sessionToken": process.env.AWS_SESSION_TOKEN
// });
// //Set DynamoDB instance to the Dynamoose DDB instance
// dynamoose.aws.ddb.set(ddb);

// Local testing
dynamoose.aws.ddb.local();

// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to db and listening on port', process.env.PORT)
})