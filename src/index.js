const express = require('express');

const app = express();

/**
 * métodos http
 * get - busca info
 * post- insere no servidor
 * put - alterar uma inforação
 * patch - alterar uma informação expecífica
 * delete - deletar informação
 */

app.get('/courses', (req, res) => {
    return res.json(["curso 1", "curso 2", "curso 3"]);
});

app.post('/courses', (req, res) => {
    return res.json(["curso 1", "curso 2", "curso 3", "curso 4"])
})

app.put('/courses/:id', (req, res) => {
    return res.json(["curso 6", "curso 2", "curso 3", "curso 4"])
})

app.path('/courses/:id', (req, res) => {
    return res.json(["curso 6", "curso 7", "curso 3", "curso 4"])
})

app.delete('/courses/:id', (req, res) => {
    return res.json(["curso 6", "curso 7", "curso 4"])
})

app.listen(3333);