const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//const charDataWrapper = require('./routes/charDataWrapper-route');
//const charDataCont = require('./routes/charDataCont-route');
const characteres = require('./routes/characteres-route');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/marvel', (req, res, next) => {
//     res.status(200).send({
//         message:"Api Rest Marvel"
//     })
// })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});


//routes:
//app.use('/characters', charDataWrapper);
//app.use('/characters/cont', charDataCont);
app.use('/characters', characteres);

// Quando não encontra rota, entra aqui:
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;