const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: "Todo App v1.0"
    });
});

//GET /users array of objects
//Give users name and age properties
app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Monica',
            age: 32
        },
        {
            name: 'Chandler',
            age: 35
        },
        {
            name: 'Ross',
            age: 33
        },
        {
            name: 'Phoebe',
            age: 31
        },
        {
            name: 'Fred',
            age: 30
        }
    ])
});


app.listen(3000);

module.exports.app = app;