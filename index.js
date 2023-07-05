const express = require('express');
const expressSession = require("express-session");
// const passport = require("./lib/passport-local");
const passport = require("./lib/passport-jwt");
const models = require("./models");
const flash = require("express-flash");
const app = express();
const PORT = 3030;

app.use(expressSession({
  secret: "12345",
}));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(passport.initialize());
// app.use(passport.session());

app.use(flash());

require('./router')(app)

app.use(express.static('public'));

models.sequelize.authenticate().then(() => {
  console.log("SERVER ON");
  app.listen(PORT, () => {
    console.log("server is running on port: " + PORT);
  })
})
.catch((err) => {
  console.log(err);
})
