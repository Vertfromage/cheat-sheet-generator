require('dotenv').config()
const express = require('express')
const dynamoose = require('dynamoose')
const formulaRoutes = require('./routes/FormulaRoutes')

// aws
const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_REGION,
  credentials: new AWS.Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  roleArn: 'arn:aws:iam::ACCOUNT_ID:role/LabRole'
});

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

// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": process.env.AWS_REGION
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);

// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to db and listening on port', process.env.PORT)
})