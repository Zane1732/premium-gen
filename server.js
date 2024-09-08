const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

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
        const account = { id: 'example_id', pass: 'example_pass' };
        res.json({ success: true, account: `${account.id}:${account.pass}` });
    } else {
        res.json({ success: false });
    }
});

// Endpoint to upload stock data
app.post('/uploadStock', upload.single('restockFile'), (req, res) => {
    const { password } = req.body;
    if (password !== 'restock') {
        return res.json({ success: false });
    }

    if (!req.file) {
        return res.json({ success: false });
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const stock = {};

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.json({ success: false });
        }

        const lines = data.split('\n');
        lines.forEach(line => {
            const [id, pass] = line.split(':');
            if (id && pass) {
                const accountType = req.body.accountType || 'default';
                if (!stock[accountType]) {
                    stock[accountType] = [];
                }
                stock[accountType].push({ id, pass });
            }
        });

        // Update stock data
        Object.keys(stock).forEach(type => {
            if (!stockData[type]) {
               
