const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserGame = require("../data/users.json")



const loginHandler = (username, password, done) => {
  const foundUser = UserGame.findIndex((user) => {
    return user.username == username && user.password == password;
  });

  if (foundUser == -1) {
    return done(null, false, { message: "invalid username or password" });
  }
  return done(null, UserGame[foundUser]);
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    loginHandler
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;