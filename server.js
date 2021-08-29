const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('temp'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './temp/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});