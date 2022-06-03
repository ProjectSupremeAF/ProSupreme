const Store = require('../models/Store.models');

//Add Item record
const addItem = (req,res) =>{
    //const name = req.body.name;
    //const sliitID = req.body.sliitID;
    //destructure
    const{code, name, category, quentity, type, price} = req.body;

    const newItem = new Store({
        code,
        name,
        category,
        quentity,
        type,
        price
    });

    newItem.save().then((items)=>{
        res.json(items)
    })
    .catch((err)=>{
        res.json(err)
    });
   };

   //Get all Item records
   const getAllItems = (req,res)=>{
       Store.find().then((items)=>{
           res.json(items)
     })
     .catch((err)=>{
         res.json(err)
     });
   };

   //Update an Item
    const updateItem = (async (req,res)=>{
       let userId = req.params.id;
       const{code, name, category, quentity, type, price} = req.body;

       const updateItem = {
           code,
           name,
           category,
           quentity,
           type,
           price
       }
       
       const update = await Store.findByIdAndUpdate(userId, updateItem)
       .then((item)=> {
        //console.log("Item updated");
        res.status(200).send({status: "Item Updated", item})
     }).catch((err)=>{
       console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
     })
    })

    //Delete an Item
    const deleteItem = (async (req,res) => {
        let userId = req.params.id;

        await Store.findByIdAndDelete(userId)
        .then(() =>{
            res.status(200).send({status: "User deleted"})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete user", error: err.message});
        })
    })

    //Get only one Item record
    const getOneItem =(async (req,res) => {
        let userId = req.params.id;

        const user = await Store.findById(userId)
        .then((item) =>{
            res.status(200).send({status: "User fetched", item});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
    })



   module.exports = {
       addItem,
       getAllItems,
       updateItem,
       deleteItem,
       getOneItem,
   };