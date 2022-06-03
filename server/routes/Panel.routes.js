const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const { 
    addItem,
    getAllItems,
    updateItem,
    deleteItem,
    getOneItem,
} = require("../controller/Panel.controller");

//http://localhost:5000/api/panel/add
router.post("/add", addItem);

//http://localhost:5000/api/panel/all
router.get("/all", getAllItems);

//http://localhost:5000/api/panel/update/:id
router.put("/update/:id", updateItem);

//http://localhost:5000/api/panel/delete/:id
router.delete("/delete/:id", deleteItem);

//http://localhost:5000/api/panel/get:id
router.get("/get/:id", getOneItem);

module.exports = router;