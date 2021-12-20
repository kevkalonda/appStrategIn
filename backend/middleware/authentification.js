const token = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try{
    const jwk = req.headers.authorization.split(' ')[1];
    const decodejwk = token.verify(jwk, 'RANDOM_TON_SECRET');
    const userId = decodejwk.userId;
    if(req.body.userid && req.body.userid !== userId ){
      throw 'userId no valable'
    }
    else {
      next();
    }
  }catch(error){
    res.status(401).json({ error: error | 'Requette non authentifier' });
  }
}
