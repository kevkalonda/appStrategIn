const cryptPassword = require('bcrypt');
const token = require('jsonwebtoken');
const Model = require('../models/Model');

exports.udpateCompte = (req, res, next)=>{
  console.log("compte modifier");
  //res.json({ message : "update succeful!" });
  Model.updateOne({ email: req.body.email }, {
    nom: req.body.nom,
    postnom: req.body.prenom,
    telephone: req.body.phone,
    email: req.body.mail
  }).then(()=>{
    console.log("un compte a été modifié")
    res.status(200).json({message: "ok"})
  })
  .catch(error => res.status(400).json({ error }))
}

exports.deleteCompte = (req, res, next)=>{
  console.log("compte modifier");
  //res.json({ message : "update succeful!" });
  Model.deleteOne({email: req.body.email})
    .then(()=>{
      console.log("suppression ok")
      res.status(200).json({message: "ok"})
    })
    .catch(error => res.status(400).json({ error }))
}

exports.getAllCompte = (req, res, next)=>{
  console.log("tout les comptes modifier");
  Model.find()
    .then(users=>{
      res.status(200).json(users)
    })
    .catch(error => res.status(400).json({ error }))
}


exports.getMyCompte = (req, res, next)=>{
  console.log(req.body.email);
  Model.findOne({ email: req.body.email })
    .then(user =>{
      if(!user){
          return res.status(401).json({ error: 'utilisateur non trouvé! ' });
      }
      res.status(200).json(user);
    })
    .catch(error => res.status(500).json({ error }))
}

exports.createUser= (req, res, next) => {
  console.log(req.body.mdp);
  const salt = cryptPassword.genSaltSync(10);
  const hash = cryptPassword.hashSync(req.body.mdp, salt);
  const user = new Model({
    nom: req.body.nom,
    postnom: req.body.prenom,
    telephone: req.body.phone,
    email: req.body.mail,
    mot_de_passe: hash
  });
  user.save()
    .then(() => res.status(201).json({
      message: 'Utilisateur cree',
      userId : user._id,
      token: token.sign(
        { userId : user._id },
        'RANDOM_TON_SECRET',
        { expiresIn : '24h' }
      )
    }))
    .catch(error => res.status(400).json({ error }));
}

/**
* Pour se connecter on recupere l'utilisateur dans la base qui correspond à l'emailrentré
* si le mail est pas bon on ne recoit pas de user on evoie le message 'user not find'
* sinon on compare le password entré avec le hash stocké dans la BDD
*   -si la comparaison n'est pas bonne on envoie le message "password not valid"
*   -sinon on envoi son user_id et une clée
*/

exports.connexionUser = (req, res, next) => {
  console.log(req.body);
  //res.json({ message: 'Votre requête a bien été reçue chez kevin test!' });
  Model.findOne({ email: req.body.mail })
    .then(user=>{
      if(!user){
        return res.status(401).json({ error: 'utilisateur non trouvé! ' });
      }
      cryptPassword.compare(req.body.mdp, user.mot_de_passe)
        .then(valid =>{
          if(!valid){
            return res.status(401).json({ error: 'Mot de passe incorrect' });
          }
          res.status(200).json({
            message: "ok",

          })
        })
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => res.status(500).json({ error }))
}
