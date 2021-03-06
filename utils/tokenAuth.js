const jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
    const token = Object.assign(req.headers)['x-auth-token'];
    // console.log(req.headers)
    // console.log(token)
    
    if (!token) {
      return res.status(401).json({
          message: 'NO token found! Authorization failed... 😟'
      });
      
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWTSECRET);
    
      req.user = decodedToken.user
      next()
    } catch (err) {
      res.status(401).json({message: 'Token Invalid'})
    }
};
