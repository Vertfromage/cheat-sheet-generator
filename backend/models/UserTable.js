// The dynamoose instance
const dynamoose = require('dynamoose')
const Schema = dynamoose.Schema

// My schema
const UserSchema = new Schema({
  // Key value pairs
  id: {
    type: String,
    hashKey: true
  },
  name: {
    type: String,
    required: true
  },
  // this is an array of page ids
  pages: {
    type : Array,
    schema : [String]
  }

  // dynamoose automatically adds createdAt and updatedAt because timestamp is set to true
}, {
  // Settings
  "timestamps": true
}
)

// This is my model based on the schema
module.exports = dynamoose.model("UserDatabase", UserSchema, {
  // When the table already exists set false - highly recommended in production
  "create": true
})