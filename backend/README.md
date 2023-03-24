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
# CLI commands - don't really need because of postman... but still
To list tables: aws dynamodb list-tables --endpoint-url http://localhost:8000
To scan table: aws dynamodb scan --endpoint-url http://localhost:8000 --table-name "FormulaDatabase" 
If I want to put in a file: --output json > items.json

npm run dev

# I got rid of Puppeteer I didn't need it... might want to figure out how to remove unused packages??? I was going to use it to print to pdf, but I found an easier way that uses built in tools.

# Lambdas Docs
https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
https://aws.amazon.com/getting-started/hands-on/run-serverless-code/
https://github.com/awsdocs/aws-lambda-developer-guide/tree/main/sample-apps

# TA's advice:
I'm making it too complicated, instead for lambdas do: admin report - get list of users formulas, how many users, overall statistics
specialized query that only gets called sometimes
don't need model just hard coded query
sns - trigger to send notification (amazons notification service) might count as item simple notification service
attach an api gateway to lambda and then make a get request  (use axios)
better because no sdk

# ToDo Extra
- Sanitize inputs found this advice: https://stackoverflow.com/questions/46718772/how-i-can-sanitize-my-input-values-in-node-js
- docs validator: https://express-validator.github.io/docs/
- docs sanitizer: https://flaviocopes.com/express-sanitize-input/
- you can add validators to the schema see: https://dynamoosejs.com/guide/Schema/

# mathjax examples
sum of squares
$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
Pythagorean Theorem 
$a^2+b^2=c^2$
area of a rectangle
$a = l\times w$

# Docker
-Frontend
docker build -f Dockerfile.dev -t frontend-formula:0.1 .
docker run -d -it --rm -p 3000:3000 --name frontend-formula 62ffbe917f1f
-Backend
docker build -t backend-image -f Dockerfile.backend .
docker run -d -p 4000:4000 --name backend-container backend-image