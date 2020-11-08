const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM caractere             
            INNER JOIN images ON (caractere.img_id = images.id)
            INNER JOIN eventolista ON (caractere.event_id = eventolista.id)
            INNER JOIN comiclist ON (caractere.comic_id = comiclist.id)            
            INNER JOIN storylist ON (caractere.storiy_id = storylist.id)
            INNER JOIN url ON (caractere.url_id = url.id) `,
            (error, result, field) => {
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                const tamando = result.length;
                const response = result.map(resultado => {
                    return {
                        code: 200,
                        status: "ok",
                        copyright: resultado.copyright,
                        attributionText: resultado.attributionText,
                        attributionHTML: resultado.attributionHTML,
                        etag: resultado.etag,
                        data: {
                            offset: 0,
                            limit: tamando,
                            total: 1493,
                            count: tamando,
                            results: [
                                {
                                    id: resultado.heroes_id,
                                    name: resultado.name,
                                    description: resultado.description,
                                    modified: resultado.modified,
                                    thumbnail: {
                                        path: resultado.path,
                                        extension: resultado.extension
                                    },
                                    events: {
                                        available: resultado.available_event,
                                        collectionuri: resultado.collectionuri_event,
                                        returned: resultado.returned_event
                                    },
                                    serie: {
                                        available: resultado.available,
                                        collectionuri: resultado.collectionuri,
                                        returned: resultado.returned
                                    },
                                    comics: {
                                        available: resultado.available_comic,
                                        collectionuri: resultado.collectionuri_comic,
                                        returned: resultado.returned_comic
                                    },
                                    urls: {
                                        type: resultado.type,
                                        url: resultado.url
                                    }
                                },


                            ],
                        }

                    }
                })

                res.status(201).send({
                    mensagem: 'retorno positivo',
                    response
                })
            }
        )
    });
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id)
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM caractere             
                INNER JOIN images ON (caractere.img_id = images.id)
                INNER JOIN eventolista ON (caractere.event_id = eventolista.id)
                INNER JOIN comiclist ON (caractere.comic_id = comiclist.id)            
                INNER JOIN storylist ON (caractere.storiy_id = storylist.id)
                INNER JOIN url ON (caractere.url_id = url.id)    
            WHERE caractere.heroes_id = ?`,
            [req.params.id],
            (error, result, field) => {
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                const tamando = result.length;
                const response = result.map(resultado => {
                    return {
                        code: 200,
                        status: "ok",
                        copyright: resultado.copyright,
                        attributionText: resultado.attributionText,
                        attributionHTML: resultado.attributionHTML,
                        etag: resultado.etag,
                        data: {
                            offset: 0,
                            limit: tamando,
                            total: 1493,
                            count: tamando,
                            results: [
                                {
                                    id: resultado.heroes_id,
                                    name: resultado.name,
                                    description: resultado.description,
                                    modified: resultado.modified,
                                    thumbnail: {
                                        path: resultado.path,
                                        extension: resultado.extension
                                    },
                                    events: {
                                        available: resultado.available_event,
                                        collectionuri: resultado.collectionuri_event,
                                        returned: resultado.returned_event
                                    },
                                    serie: {
                                        available: resultado.available,
                                        collectionuri: resultado.collectionuri,
                                        returned: resultado.returned
                                    },
                                    comics: {
                                        available: resultado.available_comic,
                                        collectionuri: resultado.collectionuri_comic,
                                        returned: resultado.returned_comic
                                    },
                                    urls: {
                                        type: resultado.type,
                                        url: resultado.url
                                    }
                                },


                            ],
                        }

                    }
                })

                res.status(201).send({
                    mensagem: 'retorno positivo',
                    response
                })
            }
        )
    });

});

router.get('/:id/comics', (req, res, next) => {
    console.log(req.params.id)
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM comic  WHERE comic.comics_id = ? 
            `,   
                      
            [req.params.id],
            (error, result, field) => {
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                const tamando = result.length;
                const response = result.map(resultado => {
                    return {
                        code: 200,
                        status: "ok",
                        copyright: resultado.copyright,
                        attributionText: resultado.attributionText,
                        attributionHTML: resultado.attributionHTML,
                        etag: resultado.etag,
                        data: {
                            offset: 0,
                            limit: tamando,
                            total: 1493,
                            count: tamando,
                            results: [
                                {
                                     id: resultado.id,
                                     digitalId: resultado.digitalId,
                                     title: resultado.title,                                     
                                     issueNumber: 19,
                                     variantDescription: resultado.variantDescription,
                                     description: resultado.description,
                                     modified: resultado.modified,
                                     isbn:resultado.isbn,
                                     upc:resultado.upc,
                                     diamondCode: resultado.diamondCode,
                                     ean: resultado.ean,
                                     issn: resultado.issn,
                                     format: resultado.format,
                                     pageCount:resultado.pageCount,
                                     resourceURI: resultado.resourceURI,
                                     comics_id: resultado.comics_id,
                                    events: {
                                        available: resultado.available_event,
                                        collectionuri: resultado.collectionuri_event,
                                        returned: resultado.returned_event
                                    },
                                    serie: {
                                        available: resultado.available,
                                        collectionuri: resultado.collectionuri,
                                        returned: resultado.returned
                                    },
                                    comics: {
                                        available: resultado.available_comic,
                                        collectionuri: resultado.collectionuri_comic,
                                        returned: resultado.returned_comic
                                    },
                                    urls: {
                                        type: resultado.type,
                                        url: resultado.url
                                    }
                                },


                            ],
                        }

                    }
                })

                res.status(201).send({
                    mensagem: 'retorno positivo',
                    response
                })
            }
        )
    });

});

router.post('/', (req, res, next) => {
    conn.query(
        'INSERT INTO caractere (Id, name) VALUES (?,?)',
        [req.body.productId, req.body.quantity],
        (error, result, field) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }
            return res.status(201).send(result);
        }
    )
});

module.exports = router;