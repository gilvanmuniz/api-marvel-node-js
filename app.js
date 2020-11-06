const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const CharDataWrapper = require('./routes/CharDataWrapper-route');

app.use('/marvel', (req, res, next) => {
    res.status(200).send({
        message:"Api Rest Marvel"
    })
})

app.use('/characters', CharDataWrapper);


module.exports = app;