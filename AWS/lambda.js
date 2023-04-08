//https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_sns_code_examples.html
import  { SNSClient } from "@aws-sdk/client-sns";
// Import required AWS SDK clients and commands for Node.js
import {PublishCommand } from "@aws-sdk/client-sns";

export const handler = async(event) => {
    // Set the AWS Region.
    const REGION = "us-east-1";
    // Create SNS service object.
    const snsClient = new SNSClient({ region: REGION });
    
    // Set the parameters
    var params = {
      Message: event.msg || "Please remember to study: 'There is no try, only do!'", // MESSAGE_TEXT
      TopicArn: "arn:aws:sns:us-east-1:805096564949:RememberToStudy", //TOPIC_ARN
    };
    
    const run = async () => {
      try {
        const data = await snsClient.send(new PublishCommand(params));
        console.log("Success.",  data);
        return data; // For unit tests.
      } catch (err) {
        console.log("Error", err.stack);
      }
    };
    const result = await run();
    
    if (result){
        const response = {
            statusCode: 200,
            body: result,
        };
        return response;
    }else{
        return "Failed to send SNS"
    }
        
    };



