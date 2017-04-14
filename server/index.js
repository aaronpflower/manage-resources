require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json());

// Used for production build
app.use(express.static(path.join(__dirname, 'client')));

require('./routes')(app)

// app.all('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});