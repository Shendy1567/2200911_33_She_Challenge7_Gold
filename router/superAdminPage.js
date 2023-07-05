const router = require("express").Router();
const UserGameController = require ("../controllers/superadminpage/user_game");
const SuperUserAuthenticate = require("../middleware/superuserauthenticate")
const UserControl = new UserGameController();
const passport = require("../lib/passport-jwt");
const passportAuthenticate = passport.authenticate("jwt", {
  failureRedirect: "/login",
  failureFlash: true,
  session: false,
});

router.get("/", passportAuthenticate, SuperUserAuthenticate("superuser"), UserControl.index);
router.get("/create", passportAuthenticate, SuperUserAuthenticate("superuser"), UserControl.create);
router.get("/:id", passportAuthenticate, SuperUserAuthenticate("superuser"), UserControl.show);
router.get("/:id/edit", passportAuthenticate, SuperUserAuthenticate("superuser"), UserControl.edit);
router.get("/:id/delete", passportAuthenticate, SuperUserAuthenticate("superuser"), UserControl.delete);

router.post("/newuser", UserControl.store);
router.post("/:id/update", UserControl.update);

module.exports = router;

