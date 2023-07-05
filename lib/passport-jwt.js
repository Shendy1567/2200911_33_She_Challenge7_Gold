const passport = require("passport");
const passportJwt = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const UserGame = require("../data/users.json");

passport.use(
  new passportJwt(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: "JwtToken",
    },
    (payload, done) => {
      const userFound = UserGame.find((user) => {
        return user.id == payload.id;
      });

      if(userFound) {
        done(null, userFound);
      } else {
        done({ message: "user not found"}, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;