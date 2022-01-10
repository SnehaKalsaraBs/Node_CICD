const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }

})


module.exports.Books = mongoose.model('books', bookSchema)