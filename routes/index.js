var express = require('express');
var router = express.Router();
var React = require('react');
// This is our React component, shared by server and browser thanks to browserify
var Todo = require('../public/javascripts/todo');

/* GET home page. */
router.get('/todo', function(req, res) {
    var props = {
        items: [0, 1, 2, 3]
    }
    var todo = React.renderComponentToString(Todo(props));
    res.setHeader('Content-Type', 'text/html')
    res.end(todo);
});

module.exports = router;
