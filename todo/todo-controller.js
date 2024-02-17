
//we handle all user requests
const express = require('express');
const postToDo =
    (req,res) =>{

        //Handling user input validation by stating that user input is required
        if(req.body.text){
            throw Error('Text is required')
        }
        res.json({
            success: true,
            data: req.body
        })
    }

    const getTodo = (req,res) =>{
        res.json({
            success: true,
            data: [{
                name:"Arnold",
                age: 20,
                year: 2024,
                occupation:"doctor"
            }]
        })
    }


    module.exports = {
        postToDo,
        getTodo
    }