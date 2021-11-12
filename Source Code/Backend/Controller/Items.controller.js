const express = require('express');
const itemsController = express.Router();

let Items = require('../Model/Items.model');

itemsController.get("/get-all", async(req, res) => {
    Items.find(function(err, items){
        if(err){
            console.log(err);
        }
        else{
            res.json(items);
        }
    })
});

module.exports = itemsController;
