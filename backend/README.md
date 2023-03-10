### Backend Notes and References

# MERN stack youtube tutorial - similar but different
https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE

# https://dynamoosejs.com/getting_started/
npm install --save dynamoose

# Dynamoose course - helpful 
https://learn.rrainn.com/courses/dd4dc0b8-f97d-4a77-9ce5-337d9bb15771

# Required by dynamoose
https://www.npmjs.com/package/@aws-sdk/client-dynamodb
npm install @aws-sdk/client-dynamodb

# Using local version of dynamoDB with CLI
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.UsageNotes.html
java -D"java.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar
Inside dynamodb_local_latest folder : aws dynamodb list-tables --endpoint-url http://localhost:8000
# CLI commands - don't reallly need because of postman... but still
To list tables: aws dynamodb list-tables --endpoint-url http://localhost:8000
To scan table: aws dynamodb scan --endpoint-url http://localhost:8000 --table-name "FormulaDatabase" 
If I want to put in a file: --output json > items.json

npm run dev

# I got rid of Puppeteer I didn't need it... might want to figure out how to remove unused packages??? I was going to use it to print to pdf, but I found an easier way that uses built in tools.

# Lambdas Docs
https://stackoverflow.com/questions/33659059/invoke-amazon-lambda-function-from-node-app - right idea, but out of date.

https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
https://aws.amazon.com/getting-started/hands-on/run-serverless-code/
https://github.com/awsdocs/aws-lambda-developer-guide/tree/main/sample-apps

