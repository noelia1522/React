const LocalStrategy = require('passport-local').Strategy
function initialize(passport){


    passport.use(new LocalStrategy({usernameField:"email"},authenticateUser))

    function authenticateUser(email,password,done){
        const user = await User.findOne({email:email})
        if(user===null) {
            return done(null,false, {message: "No user with that email"})

        }

        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null,user)
            }
        }
    }

}