# cheat-sheet-generator

A math page formatting solution for students and professionals. A platform that combines a searchable formula database, drag-and-drop formula page editor, and mobile compatibility, all in one easy-to-use interface.  

Cheat Sheet Generator is a project I made for Cloud Computing, a 4th-year university course in the Winter of 2022 at Dalhousie University.

# Presentation
This is the presentation I did for my course: https://youtu.be/NnyJIa2vvnk You may want to skip ahead to the demo because we were required to do a AWS walkthrough and a code walkthrough so it's very long. The demo starts at 17:55.

## Docker
For the rest of the sections I will assume you didn't use docker but this section is for if you want to use docker. 

If you do use docker, you might want to use my images which have not yet been updated to the most recent changes, they assume you are using AWS and the SNS code connecting to AWS lambda is set up correctly. They also assume you have a .env file with:
```
PORT=<your port>
URL=<backend base url>
AWS_ACCESS_KEY_ID=<your key>
AWS_SECRET_ACCESS_KEY=<your key>
AWS_REGION=<your region>
AWS_SESSION_TOKEN=<your token>
```
If you're going to build your own image, I'm sure you know what you're doing and need no further direction.

## Installation

This assumes you're not using docker and are just running a local test environment.

To install libraries 

```bash
cd frontend
npm install
cd ..
cd backend
npm install
```

## Set Up
To run the database you can either set up DynamoDB on AWS and put the credentials in a .env file, or you can comment out the connection code and use DynamoDB locally as described in this link: https://aws.amazon.com/blogs/aws/dynamodb-local-for-desktop-development/

Before running the backend make sure you have a .env file with 

```
# Assuming you're using port 4000 on local host
PORT=4000
URL='http://localhost:4000'

# Uncomment and fill in if you use AWS
# AWS_ACCESS_KEY_ID=<your key>
# AWS_SECRET_ACCESS_KEY=<your key>
# AWS_REGION=<your region>
# AWS_SESSION_TOKEN=<your token>
```

Also, make sure in server.js that you choose to either connect to local dynamoDB or AWS with credentials, comment out whichever you aren't using. It's easy to switch back and forth. Should look like this for local DB:
```javascript
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
``` 

To run the backend open a terminal in the backend folder and run:

```bash
npm run dev
```
To run the frontend open a new terminal in the frontend folder and run:
```bash
npm start
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Haven't decided yet. Reach out to me if you want to use it. It's currently publicly viewable as a sample of my work.

