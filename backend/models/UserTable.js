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
    required: false
  },
  email:{
    type: String,
    required: true,
    index: {
      global: true,
      name: 'emailIndex'
    } 
  },
  // stored as hash string
  password: {
    type: String,
    required: true
  },
  // this is an array of page ids
  pages: {
    type : Array,
    schema : [String]
  },
  isAdmin: {
    type: Boolean,
    default: false
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