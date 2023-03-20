// The dynamoose instance
const dynamoose = require('dynamoose')
const Schema = dynamoose.Schema

// My schema
const PageSchema = new Schema({
  // Key value pairs
  id: {
    type: String,
    hashKey: true
  },
  name: {
    type: String,
    required: true
  },
  pageBody:{
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  share: {
    type: Boolean,
    default: false
  },
  tags: {
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
module.exports = dynamoose.model("PageDatabase", PageSchema, {
  // When the table already exists set false - highly recommended in production
  "create": true
})