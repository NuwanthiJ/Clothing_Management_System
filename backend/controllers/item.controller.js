import express from 'express';
import Item from '../models/item.js';
import Payment from '../models/payment.model.js';
import { z } from 'zod';

// const Item = require('../models/item');
// const router = express.Router();
// const path = require('path');
// const fs = require('fs');
// const { z } = require('zod');

// Schema for handle validations (Insert Data)
const itemSchema = z.object({
	userId: z.string().min(1),
	topic: z.string().min(1),
	image: z.string(),
	size: z.string().min(1),
	price: z.number().positive(),
	oldPrice: z.number().positive(),
	quantity: z.number().int().positive(),
	subtotal: z.number().positive()
});

// Schema for handle validations (Update Data)
const itemUpdateSchema = z.object({
	size: z.string().min(1).optional(),
	price: z.number().positive().optional(),
	oldPrice: z.number().positive().optional(),
	quantity: z.number().int().positive().optional(),
	subtotal: z.number().positive().optional()
});

const addCart = async (req, res) => {
	try {
		// Validate request body
		const itemData = itemSchema.parse(req.body);
		// If validation succeeds, save the item
		let newPro = new Item(itemData);
		newPro
			.save()
			.then(() => {
				return res.status(200).json({
					success: 'successfully saved'
				});
			})
			.catch((err) => {
				return res.status(400).json({
					error: err
				});
			});
	} catch (error) {
		// If validation fails, return error response
		return res.status(400).json({
			console: 'Invalid data',
			error: error.errors
		});
	}
};

//read
const viewAllCart = async (req, res) => {
	Item.find()
		.exec()
		.then((item) => {
			return res.status(200).json({
				success: true,
				existingProject: item
			});
		})
		.catch((err) => {
			return res.status(400).json({
				error: err
			});
		});
};

//get specific details
const viewCart = async (req, res) => {
	let userId = req.params.id;

	Item.find({ userId: userId })
		.then((item) => {
			if (!item) {
				return res.status(404).json({ success: false, error: 'Emergency not found' });
			}
			return res.status(200).json({
				success: true,
				Item: item
			});
		})
		.catch((err) => {
			return res.status(400).json({ success: false, error: err });
		});
};

// Update route
const updateCart = async (req, res) => {
	try {
		// Validate request body
		const updateData = itemUpdateSchema.parse(req.body);

		const updatedItem = await Item.findByIdAndUpdate(req.params.id, updateData, { new: true });
		if (!updatedItem) {
			return res.status(404).json({ error: 'Item not found' });
		}
		return res.status(200).json({ success: 'Item updated successfully', item: updatedItem });
	} catch (error) {
		// If validation fails or other error occurs, return 400 Bad Request
		return res.status(400).json({
			error: error.errors || 'Invalid data'
		});
	}
};

//delete
const deleteCart = async (req, res) => {
	Item.findByIdAndDelete(req.params.id)
		.then((deletedProject) => {
			if (!deletedProject) {
				return res.status(404).json({ message: 'Delete unsuccessful' });
			}
			return res.json({ message: 'Delete successful', deletedProject });
		})
		.catch((err) => {
			return res.status(400).json({ message: 'Delete unsuccessful', error: err });
		});
};

// get Order History
const getOrderHistory = async (req, res) => {
	Payment.find()
	  .exec()
	  .then((orderHistory) => {
		return res.status(200).json({
		  success: true,
		  orderHistory: orderHistory,
		});
	  })
	  .catch((err) => {
		return res.status(400).json({
		  error: err,
		});
	  });
  };

export { addCart, viewAllCart, viewCart, updateCart, deleteCart ,getOrderHistory
	
};
