const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname + "/../../data/users.json");
const models = require("../../models");

module.exports = class UserRegister{
  async registerPage(req, res) {
    res.render("registerpage")
  }

  async store(req, res) {
    const {username, password, fullname, city, birthday, gender} = req.body;

    const readUsers = JSON.parse(
      fs.readFileSync(filepath, {
        encoding: "utf-8"
      })
    );
    
    const findUser = readUsers.findIndex((user) => {
      return user.username == username;
    });
  
    if (findUser != -1) {
      return res.status(400).json({
        message: "username is already taken, please input another username",
      });
    };

    const CreateUser = await models.UserGame.create({
      username,
      password,
    });

    const FindUser = await models.UserGame.findOne({
      where :{
        id : CreateUser.id
      }
    });

    await models.UserBiodata.create({
      fullname,
      city,
      birthday,
      gender,
      userGameId: FindUser.id,
    });

    const newUser = {
      id : CreateUser.id,
      username,
      password,
      role: "user",
    };
  
    readUsers.push(newUser);
  
    fs.writeFileSync(filepath, JSON.stringify(readUsers, null, 2), {
      encoding: "utf-8",
    });

    return res.redirect("/login");
  }
} 