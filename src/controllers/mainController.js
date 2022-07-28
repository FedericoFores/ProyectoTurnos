const path = require("path");
const controlador = {
    index:(req,res) => {res.render("vistaTurnos.ejs")},
    login:(req,res) => {res.render("login")},
}

module.exports = controlador;