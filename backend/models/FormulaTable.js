// The dynamoose instance
const dynamoose = require('dynamoose')
const Schema = dynamoose.Schema

// My schema
const FormulasSchema = new Schema({
  // Key value pairs
  id: {
    type: String,
    hashKey: true
  },
  name: {
    type: String,
    required: true
  },
  formula: {
    type: String,
    required: true
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

// might be depreciated... was in tutorial but not in docs... not sure I need it.
// dynamoose.model.defaults.set({
//   "prefix": "MathFormulaPages_",
//   "sufix" : "_Development"
// })

// This is my model based on the schema
module.exports = dynamoose.model("FormulaDatabase", FormulasSchema, {
  // When the table already exists set false - highly recommended in production
  "create": true
})