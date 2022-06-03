const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const { 
    addItem,
    getAllItems,
    updateItem,
    deleteItem,
    getOneItem,
} = require("../controller/Store.controller");

//http://localhost:5000/api/store/add
router.post("/add", addItem);

//http://localhost:5000/api/store/all
router.get("/all", getAllItems);

//http://localhost:5000/api/store/update/:id
router.put("/update/:id", updateItem);

//http://localhost:5000/api/store/delete/:id
router.delete("/delete/:id", deleteItem);

//http://localhost:5000/api/store/get:id
router.get("/get/:id", getOneItem);

module.exports = router;