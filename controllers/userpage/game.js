module.exports = (req, res) => {
  // if(!req.isAuthenticated()) {
  //   return res.redirect("/login")
  // }
  res.render("gamepage")
}

// <% if (!req.isAuthenticated()) { %>
//   <a class="nav-link active text-white fw-bold" href="/login">login</a>
// <% } %> <% { %> 
//   <a class="nav-link active text-white fw-bold" href="/login/logout">logout</a>
//   <% } %>