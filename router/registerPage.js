const userRegisterController = require("../controllers/registerpage/register")

const userRoute = () => {
  const router = require("express").Router();
  const controller = new userRegisterController();

  router.get("/", controller.registerPage);
  router.post("/", controller.store);

  return router;
};

module.exports = userRoute();