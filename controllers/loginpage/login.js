const jwt = require("jsonwebtoken");
const UserGame = require("../../data/users.json")

module.exports = class UserLogin {
  async loginPage(req, res) {
    res.render("loginpage")
  };

  async doLogin(req, res) {
    const {username, password} = req.body;

    const findUser = UserGame.find((user) => {
      return user.username == username && user.password == password;
    });

    if (!findUser) {
      return res.redirect('/login')
    };

    const payload = {
      id: findUser.id,
      username: findUser.username,
    }

    const token = jwt.sign(payload, "JwtToken");
    
//     const generateToken = () => {
//       fetch("http://localhost:3030/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "text/plain",
//       "X-My-Custom-Header": "value-v",
//       Authorization:
//         token,
//     },
//   });
// };
    

    return res.json({
      message: "login successfuly, Please input your token manually or you will be redirected to login page",
      token: token,
    });

    // return res.header('Authorization', 'Bearer '+token)
  }

  async logout(req, res) {
    req.session.destroy(() => {
      return res.redirect("/login")
    });
  }
}