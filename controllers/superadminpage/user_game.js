const models = require("../../models");

module.exports = class UserGame {
  // views
  async index(req, res) {
    const listOfUser = await models.UserGame.findAll({
      order: [
        ['id', 'ASC']
      ]
    });

    res.render("adminpage", {
      data: listOfUser,
    });
  }
  async create(req, res) {
    res.render("createuser")
  }
  async show(req, res) {
    const {id} = req.params;
    const userId = await models.UserGame.findOne({
      where: {
        id,
      },
      include: [models.UserHistory, models.UserBiodata],
    });


    res.render("showuser", {
      data: userId,
    });
  }

  async edit(req, res) {
    const {id} = req.params;
    const userId = await models.UserGame.findOne({
      where: {
        id,
      },
      include: [models.UserBiodata],
    });
    
    res.render("edituserpage", {
      data: userId,
    });
    
  }

  // action
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
      username,
      password,
      role: "user",
    };
  
    readUsers.push(newUser);
  
    fs.writeFileSync(filepath, JSON.stringify(readUsers, null, 2), {
      encoding: "utf-8",
    });
    return res.redirect("/admin");
  }

  async update(req, res) {
    const {id} = req.params;
    const {username, password, fullname, city, birthday, gender} = req.body;
    await models.UserGame.update({
      username,
      password,
    },{
      where: {
        id,
      }
    });
    await models.UserBiodata.update({
      fullname,
      city,
      birthday,
      gender,
    },
    {
      where: {
        userGameId: id,
      }
    }
    );
    return res.redirect("/admin")
  }

  async delete(req, res) {
    const {id} = req.params;
    await models.UserGame.destroy({
      where: {
        id,
      }
    });

    return res.redirect("/admin");
  }
}


