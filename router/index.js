module.exports = (app) => {
  app.use('/', require("./userPage"))
  app.use('/login', require("./loginPage"))
  app.use('/register', require("./registerPage"))
  app.use('/admin', require("./superAdminPage"))
  
}