const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/**
 * cr�eation du schzma de donn�e.
 **/

const modelSchema = mongoose.Schema({
    nom: { type: String, required: true },
    postnom: { type: String, required: true },
    telephone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    mot_de_passe: { type: String, required: true },
});

//evite d'avoir plusieurs utilisateur avec un meme adresse mail
modelSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Model', modelSchema);
