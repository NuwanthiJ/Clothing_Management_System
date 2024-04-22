const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},

	topic: {
		type: String,
		required: true
	},

	image: {
		type: String,
		required: true
	},

	size: {
		type: String,
		required: true
	},

	price: {
		type: Number,
		required: true
	},

	oldPrice: {
		type: Number,
		required: true
	},

	quantity: {
		type: Number,
		required: true
	},

	subtotal: {
		type: Number,
		required: true
	}
	// descriptionone: {
	// 	type: String,
	// 	required: false
	// },

	// descriptiontwo: {
	// 	type: String,
	// 	required: false
	// },
	// descriptionthree: {
	// 	type: String,
	// 	required: false
	// },
});

module.exports = mongoose.model('item', itemSchema);
