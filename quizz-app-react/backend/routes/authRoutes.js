const authController = require('../controllers/authController')
const router = require("express").Router();
const passport = require("passport");

router.get('/', authController.getUser)
router.post('/login', authController.login)
router.post('/register', authController.register);
router.get('/logout',authController.logout)

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.status(401).send()
}

function checkNotAuthenticated(req,res,next){
    if(!req.isAuthenticated()){
        return next()
    }
    res.status(401).send()
}


module.exports = router;
