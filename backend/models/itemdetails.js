const mongoose = require('mongoose');

const itemdetailsSchema = new mongoose.Schema({
	topic: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},

	quantity: {
		type: Number,
		required: true
	},

	descriptionone: {
		type: String,
		required: true
	},

	descriptiontwo: {
		type: String,
		required: true
	},
	descriptionthree: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('itemdetails', itemdetailsSchema);
