const path = require("path");
const controlador = {
    vistaTurnos:(req,res) => {res.render("vistaTurnos")},
    login:(req,res) => {res.render("login")},
}

module.exports = controlador;