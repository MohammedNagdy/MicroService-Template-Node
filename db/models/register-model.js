mongoose = require("mongoose")

InvestorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		startingCapital: { type: Number, required: true },
	},
	{ collection: 'investor' }
)

module.exports.investorModel = mongoose.model('Investor', InvestorSchema)

