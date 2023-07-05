const router = require("express").Router()
const passport = require("../lib/passport-jwt");
const passportAuthenticate = passport.authenticate("jwt", {
  failureRedirect: "/login",
  failureFlash: true,
  session: false,
});

router.get("/game",passportAuthenticate, require('../controllers/userpage/game'))
router.get("/", require('../controllers/userpage/landingpage'))

module.exports = router