const express = require('express');

const app = express();

app.use(express.json())

/**
 * métodos http
 * get - busca info
 * post- insere no servidor
 * put - alterar uma inforação
 * patch - alterar uma informação expecífica
 * delete - deletar informação
 */

/**
 * Tipo de parâmetros
 * 
 * Route Params -> identificar um recurso para editar / deletar / buscar
 * Query Params -> Paginação / filtro de busca
 * Body Params -> Objetos para inserção / alteração
 */

app.get('/courses', (req, res) => {
    const query = req.query;
    console.log(query);
    return res.json(["curso 1", "curso 2", "curso 3"]);
});

app.post('/courses', (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json(["curso 1", "curso 2", "curso 3", "curso 4"])
})

app.put('/courses/:id', (req, res) => {
    const params = req.params;
    console.log(params);
    return res.json(["curso 6", "curso 2", "curso 3", "curso 4"])
})

app.patch('/courses/:id', (req, res) => {
    return res.json(["curso 6", "curso 7", "curso 3", "curso 4"])
})

app.delete('/courses/:id', (req, res) => {
    return res.json(["curso 6", "curso 7", "curso 4"])
})

app.listen(3333);