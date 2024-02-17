//this is the main file
const express = require('express');

const app = express();
const todoRoute =  require('../todo/todo-route');
app.use(express.json())
app.use('/todo', todoRoute)



module.exports = app;