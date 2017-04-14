require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('server/routes');
const helmet = require('helmet')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(helmet())

// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});