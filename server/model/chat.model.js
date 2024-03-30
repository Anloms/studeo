const mongoose = require('./index.model.js');

const { Schema } = mongoose;

const ChatSchema = new Schema({
  id: {
    type: String,
    required: [true, 'text is required'],
  },
  answer_1: {
    type: String,
    required: [true, 'text is required'],
  },
  answer_2: {
    type: String,
    required: [true, 'text is required'],
  },
  answer_3: {
    type: String,
    required: [true, 'text is required'],
  },

});

const Chat = mongoose.model('ChatSchema', ChatSchema);

module.exports = Chat;
