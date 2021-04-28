const mongoose = require("mongoose")

const CapSchema = mongoose.Schema({
  name: {type: String, required: true},
  drawing: {type: String},
  mold: {type: Number},
  thread: {type: String}
})

const Cap = mongoose.model("cap", CapSchema);

module.exports = { Cap, CapSchema };
