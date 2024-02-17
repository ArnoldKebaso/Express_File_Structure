
// this page contais all the routes to individual pages
const express  = require('express');
const router =  express.Router();
const {postToDo,getTodo} = require('./todo-controller')
const createToDoValidator = require('../validators/create-todo-validator')


//Here we call the  createToDoValidator middleware
// The validation will come before the controller
router.post("/",createToDoValidator,postToDo)
router.get("/",getTodo)

module.exports =router;