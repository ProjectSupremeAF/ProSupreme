const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const panelSchema = new Schema({
    code: Number,
    name:  String, 
    group: String,
    topic:   Number,
    feedback: String,
    presentation: Number
  });

  const Panel= mongoose.model('Panel', panelSchema);

  module.exports = Panel;

  