const express = require('express');

const router = express.Router();

const Controlleur = require('../controllers/controller');
const auth = require('../middleware/authentification');

router.post('/register', Controlleur.createUser);
router.post('/login', Controlleur.connexionUser);
router.delete('/suppressionCompte', Controlleur.deleteCompte);
router.post('/my_compt', Controlleur.getMyCompte);
router.get('/users', Controlleur.getAllCompte);
router.put('/update',  Controlleur.udpateCompte);


//router.use(Controlleur.test);

module.exports = router;
