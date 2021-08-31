const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/about.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/portfolio.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/contact.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});