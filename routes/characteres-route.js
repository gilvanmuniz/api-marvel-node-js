const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                       
            FROM caractere             
                RIGHT JOIN images ON (caractere.img_id = images.id)
                RIGHT JOIN eventolista ON (caractere.event_id = eventolista.id)
                INNER JOIN serieslist ON (caractere.heroes_id = serieslist.caractere_id) 
                INNER JOIN seriesumaries ON (serieslist.id = seriesumaries.Id_list)                
                RIGHT JOIN comiclist ON (caractere.heroes_id = comiclist.caractere_id)            
                RIGHT JOIN comicsumaries ON (comiclist.id = comicsumaries.comiclist_id)            
                RIGHT JOIN storylist ON (caractere.storiy_id = storylist.id)
                RIGHT JOIN storysumaries ON (storylist.story_sumary_id = storysumaries.id)
                RIGHT JOIN url ON (caractere.url_id = url.id)`,
                async (error, result, field) => {
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                
                const tamando = await result.length;
                const response = await result.map(resultado => {
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
                                    resourceuri:resultado.resourceuri,
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
                                        items: [
                                            {
                                                resourceURI: resultado.resourceuri_serie,
                                                name: resultado.name_serie,
                                                type: "cover"
                                            }
                                        ]
                                    },
                                    comics: {
                                        available: resultado.available_comic,
                                        collectionuri: resultado.collectionuri_comic,
                                        returned: resultado.returned_comic,
                                        items:{
                                            resourceURI: resultado.resourceuri_comic,
                                            name: resultado.name_comic,                                                 
                                        }
                                    },
                                    stories: {
                                        available: resultado.available_story,
                                        collectionuri: resultado.collectionuri_story,
                                        returned: resultado.returned_story,
                                        items: [
                                            {
                                                resourceURI: resultado.resourceuri_story,
                                                name: resultado.namestory,
                                                type: "cover"
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

router.get('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `SELECT *                       
            FROM caractere             
                RIGHT JOIN images ON (caractere.img_id = images.id)
                RIGHT JOIN eventolista ON (caractere.event_id = eventolista.id)
                INNER JOIN serieslist ON (caractere.heroes_id = serieslist.caractere_id) 
                INNER JOIN seriesumaries ON (serieslist.id = seriesumaries.Id_list)                
                RIGHT JOIN comiclist ON (caractere.comic_id = comiclist.id)            
                RIGHT JOIN comicsumaries ON (comiclist.id = comicsumaries.comiclist_id)            
                RIGHT JOIN storylist ON (caractere.storiy_id = storylist.id)
                RIGHT JOIN storysumaries ON (storylist.story_sumary_id = storysumaries.id)
                RIGHT JOIN url ON (caractere.url_id = url.id)    
            WHERE caractere.heroes_id = ?`,
            [req.params.id],
            async (error, result, field) => {
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                
                const tamando = await result.length;
                const response = await result.map(resultado => {

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
                                    resourceuri:resultado.resourceuri,
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
                                        items: [
                                            {
                                                resourceURI: resultado.resourceuri_serie,
                                                name: resultado.name_serie,
                                                type: "cover"
                                            }
                                        ]
                                    },
                                    comics: {
                                        available: resultado.available_comic,
                                        collectionuri: resultado.collectionuri_comic,
                                        returned: resultado.returned_comic,
                                        items:{
                                            resourceURI: resultado.resourceuri_comic,
                                            name: resultado.name_comic,                                                 
                                        }
                                    },
                                    stories: {
                                        available: resultado.available_story,
                                        collectionuri: resultado.collectionuri_story,
                                        returned: resultado.returned_story,
                                        items: [
                                            {
                                                resourceURI: resultado.resourceuri_story,
                                                name: resultado.namestory,
                                                type: "cover"
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

}); // /id end

router.get('/:id/comics', (req, res, next) => {
    mysql.getConnection((error, coon) => {
        coon.query(
            `SELECT *                                   
            FROM comic INNER JOIN caractere
            RIGHT JOIN eventolista ON (caractere.event_id = eventolista.id)
            RIGHT JOIN serieslist ON (caractere.heroes_id = serieslist.caractere_id) 
            RIGHT JOIN seriesumaries ON (serieslist.id = seriesumaries.Id_list)
            RIGHT JOIN comiclist ON (caractere.comic_id = comiclist.id)            
            RIGHT JOIN comicsumaries ON (comiclist.id = comicsumaries.comiclist_id) 
            RIGHT JOIN images ON (caractere.img_id = images.id) 
            RIGHT JOIN eventsumaries ON (eventolista.id = eventsumaries.eventlist_id) 
            WHERE comic.comics_id = ? 
            `,

            [req.params.id],
            async(error, result, field) => {
                if (error) {
                    return await res.status(500).send({
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
                                    isbn: resultado.isbn,
                                    upc: resultado.upc,
                                    diamondCode: resultado.diamondCode,
                                    ean: resultado.ean,
                                    issn: resultado.issn,
                                    format: resultado.format,
                                    pageCount: resultado.pageCount,
                                    resourceURI: resultado.resourceURI,
                                    comics_id: resultado.comics_id,
                                    TextObject: {
                                        type: "",
                                        language: "",
                                        text: "",
                                    },
                                    url: {
                                        type: resultado.type,
                                        url: resultado.url
                                    },
                                    SeriesSummary: {
                                        resourceURI: resultado.resourceuri_serie,
                                        name: resultado.name_serie,
                                        type: "cover"
                                    },
                                    ComicSummary: {
                                        resourceURI: resultado.resourceuri_comic,
                                        name: resultado.name_comic,
                                    },
                                    ComicDate: {
                                        type: "",
                                        date: ""
                                    },
                                    ComicPrice: {
                                        type: "",
                                        price: ""
                                    },
                                    Image: {
                                        path: resultado.path,
                                        extension:resultado.extension
                                    },
                                    CreatorList: {
                                        available: "",
                                        returned: "",
                                        collectionURI: "",
                                        items: ""
                                    },
                                    events: {
                                        available: resultado.available_event,
                                        collectionuri: resultado.collectionuri_event,
                                        returned: resultado.returned_event,
                                        items:{
                                            resourceURI:resultado.resourceuri_event,
                                            name:resultado.name_event
                                        }
                                    },

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
            async (error, result, field) => {
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                const tamando = await result.length;
                const response = await result.map(resultado => {
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
                                    resourceURI: resultado.resourceURI,
                                    type: resultado.type,
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
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO caractere (heroes_id, name, description, modified, resourceuri) VALUES (?,?,?,?,?)',
            [req.body.heroe_id, req.body.name, req.body.description, req.body.modified, req.body.resourceuri],
            async (error, result, field) => {
                conn.release();
                if (error) { return await res.status(500).send({ error: error }) }
                return await res.status(201).send(result);
            }
        )
    })
});

router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO caractere (heroes_id, name, description, modified, resourceuri) VALUES (?,?,?,?,?)',
            [req.body.heroe_id, req.body.name, req.body.description, req.body.modified, req.body.resourceuri],
            async (error, result, field) => {
                conn.release();
                if (error) { return await res.status(500).send({ error: error }) }
                return await res.status(201).send(result);
            }
        )
    })
});


router.put('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `UPDATE caractere 
                SET name = ?,
                    description = ?, 
                    modified = ?, 
                    resourceuri = ? 
                    WHERE heroes_id = ?`,
                    [req.body.name, req.body.description, req.body.modified, req.body.resourceuri, req.params.id],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(201).send(result);
            }
        )
    });
});

router.delete('/:id', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `DELETE FROM caractere WHERE heroes_id = ?`,
            [req.params.productId],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(201).send(result);
            }
        )
    }); 
});


module.exports = router;