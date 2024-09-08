// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files (like your HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to upload stock file
app.post('/upload', upload.single('stockFile'), (req, res) => {
    const filePath = req.file.path;
    const fileName = req.file.originalname;

    // Read file and save data
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }

        // Save data to a file or in-memory data store
        fs.writeFile(path.join(__dirname, 'stocks', fileName), data, err => {
            if (err) {
                return res.status(500).send('Error saving file.');
            }
            res.send('File uploaded and saved.');
        });
    });
});

// Endpoint to get stock data
app.get('/stocks/:fileName', (req, res) => {
    const filePath = path.join(__dirname, 'stocks', req.params.fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found.');
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
