const express = require('express');
const Items = require('../models/itemdetails');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post('/Itemdetails/save', (req, res) => {
	let newPro = new Items(req.body);

	newPro
		.save()
		.then(() => {
			return res.status(200).json({
				success: ' successfully saved'
			});
		})
		.catch((err) => {
			return res.status(400).json({
				error: err
			});
		});
});

router.get('/Itemdetails', (req, res) => {
	Items.find()
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
});

//get specific details
router.get('/Itemdetails/:id', (req, res) => {
	let preId = req.params.id;

	Items.findById(preId)
		.then((item) => {
			if (!item) {
				return res.status(404).json({ success: false, error: 'Item not found' });
			}
			return res.status(200).json({
				success: true,
				Item: item
			});
		})
		.catch((err) => {
			return res.status(400).json({ success: false, error: err });
		});
});
module.exports = router;
