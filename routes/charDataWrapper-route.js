const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/',(req, res, next) => {
    mysql.getConnection((error, coon) => {
        coon.query(
            'SELECT * FROM wraper',
            (error, result, field) =>{
                if(error){
                    return res.status(500).send({
                        error:error,
                        response:null
                    });
                }
                res.status(201).send({
                    mensagem:'retorno positivo',
                    result
                })
            }
        )
    });    
});

router.get('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        message:"Hello World com 'ID' !!!",
        id:id
    })
    
});

router.post('/',(req, res, next) => {
    // res.status(201).res.send(
    //     {message:"Hello POST World!!!"}
    // )
    conn.query(
        'INSERT INTO wraper (productId, quantity) VALUES (?,?)',
        [req.body.productId, req.body.quantity],
        (error, result, field) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }
            const response = {
                message: 'Pedido inserido com sucesso',
                createdOrder: {
                    orderId: result.insertId,
                    productId: req.body.productId,
                    quantity: req.body.quantity,
                    request: {
                        type: 'GET',
                        description: 'Retorna todos os pedidos',
                        url: process.env.URL_API + 'orders'
                    }
                }
            }
            return res.status(201).send(response);
        }
    )
});

module.exports = router;