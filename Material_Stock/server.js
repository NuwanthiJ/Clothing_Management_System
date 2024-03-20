const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // For using environmental variables
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/blog', (req, res) => {
    res.send('Welcome to the Blog!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Node API app is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });