const userLoginController = require("../controllers/loginpage/login")

const userRoute = () => {
  const router = require("express").Router();
  const controller = new userLoginController();
  // const passport = require("../lib/passport-local");

  router.get("/", controller.loginPage);
  router.post("/", controller.doLogin);

  // router.post("/", passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/login",
  //   failureFlash: true,
  // }))


  return router;
};

module.exports = userRoute();