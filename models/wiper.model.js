const mongoose = require("mongoose")

const WiperSchema = mongoose.Schema({
	name: {type: String},
	drawing: {type: Number},
  mold: {type: Number},
	rodDiameter: {type: Number},
	neckDiameter: {type: Number},
})

const Wiper = mongoose.model("Wiper", WiperSchema);

module.exports = { Wiper, WiperSchema };
