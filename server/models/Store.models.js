const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const storeSchema = new Schema({
    code: Number,
    name:  String, // String is shorthand for {type: String}
    category: String,
    quentity:   Number,
    type: String,
    price: Number
  });

  const Store = mongoose.model('Store', storeSchema);

  module.exports = Store;

  