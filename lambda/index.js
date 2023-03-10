const PageTable = require("./models/PageTable")
const dynamoose = require('dynamoose')

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = async (event) => {
    const operation = event.operation;
    const payload = event.payload;
    
    const ddb = new dynamoose.aws.ddb.DynamoDB({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": process.env.AWS_REGION,
    "sessionToken": process.env.AWS_SESSION_TOKEN
});
// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);
    
    var Page
    switch (operation) {
        case 'create':
            Page = await PageTable.create(payload)
            return Page
        case 'get':
            Page = await PageTable.get(payload.id)
            return Page
        case 'update':
            Page = await PageTable.update(payload)
            return Page
        case 'delete':
            Page = await PageTable.delete(payload.id)
            return Page
        case 'byName':
            Page = await PageTable.query().filter("name").eq(payload.name).exec()
            return Page
        case 'echo':
            return payload;
        case 'ping':
            return 'pong';
        default:
            throw new Error(`Unrecognized operation "${operation}"`);
    }
};

