const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.send("Hello World!!!")
});

router.get('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        message:"Hello World com 'ID' !!!",
        id:id
    })
    
});

router.post('/',(req, res, next) => {
    res.status(201).res.send(
        {message:"Hello POST World!!!"}
    )
});

module.exports = router;