require('dotenv').config()
const express = require('express')

// Database
const dynamoose = require('dynamoose')

// Routes Files
const formulaRoutes = require('./routes/FormulaRoutes')
const userRoutes = require('./routes/UserRoutes')
const pageRoutes = require('./routes/PageRoutes')
const authRoutes = require('./routes/AuthRoutes')

// express app
const app = express() 

// middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    console.log(req.body, req.params)
    next()
})

// routes - need the path localhost:4000/api/
app.use('/api/formulas', formulaRoutes)
app.use('/api/users', userRoutes)
app.use('/api/pages', pageRoutes)
app.use('/api/auth', authRoutes) 

// // Create new DynamoDB instance 
// const ddb = new dynamoose.aws.ddb.DynamoDB({
//     "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
//     "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
//     "region": process.env.AWS_REGION,
//     "sessionToken": process.env.AWS_SESSION_TOKEN
// });
// //Set DynamoDB instance to the Dynamoose DDB instance
// dynamoose.aws.ddb.set(ddb);

// // Local testing
dynamoose.aws.ddb.local()

// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to db and listening on port', process.env.PORT)
})