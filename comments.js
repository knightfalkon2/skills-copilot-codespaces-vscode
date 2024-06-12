// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// Create route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/comments', (req, res) => {
  res.send(`You sent: ${req.body.comment}`);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});