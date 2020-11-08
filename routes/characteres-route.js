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
                console.log(result)
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
    mysql.getConnection((error, conn) => {     
                
        conn.query(
            `SELECT *                       
            FROM caractere             
                INNER JOIN images ON (caractere.img_id = images.id)
                INNER JOIN eventolista ON (caractere.event_id = eventolista.id)
                INNER JOIN serieslist ON (caractere.serie_id = serieslist.id)
                INNER JOIN seriesumaries ON (serieslist.sumarie_id = seriesumaries.Id_list)
                INNER JOIN comiclist ON (caractere.comic_id = comiclist.id)            
                RIGHT JOIN storylist ON (caractere.storiy_id = storylist.id)
                RIGHT JOIN storysumaries ON (storylist.story_sumary_id = storysumaries.id)
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
                console.log(result[0])
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
                                        available: resultado.available_serie,
                                        collectionuri: resultado.collectionuri_serie,
                                        returned: resultado.returne_serie,
                                        items:[                                            
                                            {
                                                resourceURI:resultado.resourceuri_serie,
                                                name:resultado.name_serie,
                                                type:"cover"
                                            }
                                        ]
                                    },
                                    comics: {
                                        available: resultado.available_comic,
                                        collectionuri: resultado.collectionuri_comic,
                                        returned: resultado.returned_comic
                                    },
                                    stories: {
                                        available: resultado.available_story,
                                        collectionuri: resultado.collectionuri_story,
                                        returned: resultado.returned_story,
                                        items:[
                                            {
                                                resourceURI:resultado.resourceuri_story,
                                                name:resultado.namestory,
                                                type:"cover"
                                            }
                                        ]
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

router.get('/:id/events', (req, res, next) => {
    console.log(req.params.id)
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM event  WHERE event.events_id = ? 
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
                                     title: resultado.title,                                     
                                     issueNumber: 19,                                     
                                     description: resultado.description,
                                     modified: resultado.modified,                                   
                                     start: resultado.start,                                 
                                     end: resultado.end,                                 
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

router.get('/:id/series', (req, res, next) => {
    console.log(req.params.id)
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM series  WHERE series.series_id = ? 
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
                                     title: resultado.title,                                     
                                     issueNumber: 19,                                     
                                     description: resultado.description,
                                     modified: resultado.modified,                                   
                                     startYear: resultado.startYear,                                 
                                     endYear: resultado.endYear,                                 
                                     series_id: resultado.series_id,
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

router.get('/:id/stories', (req, res, next) => {
    console.log(req.params.id)
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM story  WHERE story.stories_id = ? 
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
                                     title: resultado.title,                              
                                                                    
                                     description: resultado.description,
                                     resourceURI:resultado.resourceURI,
                                     type:resultado.type,
                                     modified: resultado.modified,                                  
                                                                 
                                     stories_id: resultado.stories_id,
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