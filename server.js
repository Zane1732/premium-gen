const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const upload = multer({ dest: 'uploads/' });
const stockData = {}; // Store stock data in memory or use a database

app.use(express.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// Endpoint to generate an account
app.get('/generateAccount', (req, res) => {
    const { password, accountType } = req.query;

    // Implement password checking and account generation logic here
    // For demonstration, we'll just return a mock account
    if (password === 'your_password') {
        const accounts = stockData[accountType] || [];
        if (accounts.length > 0) {
            const account = accounts.pop();
            stockData[accountType] = accounts; // Update stock data
            res.json({ success: true, account: `${account.id}:${account.pass}` });
        } else {
            res.json({ success: false, message: 'Out of stock!' });
        }
    } else {
        res.json({ success: false });
    }
});

// Endpoint to upload stock data
