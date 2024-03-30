const { ObjectId } = require('mongodb');
const mongoose = require('./index.model.js');

const { Schema } = mongoose;

const collectionSchema = new Schema({
  collection_name: { type: String },
  data: [ObjectId],
});

const Collection = mongoose.model('collectionSchema', collectionSchema);

module.exports = Collection;
