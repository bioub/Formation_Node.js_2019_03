const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
    minlength: [3, 'Le prénom doit dépasser 3 caractères'],
  },
  nom: {
    type: String,
  }
});


module.exports = mongoose.model('Contact', schema);
