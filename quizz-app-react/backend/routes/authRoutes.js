const authController = require('../controllers/authController')
const router = require("express").Router();
const passport = require("passport");

router.get('/', authController.getUser)
router.post('/login', passport.authenticate('authController.login'))
router.post('/register', authController.register);
router.get('/logout',authController.logout)


module.exports = router;
