const path = require ("path");
const controlador = {
    index:(req,res) => {res.render("vistaTurnos.ejs")},
    login:(req,res) => {res.render("login")},
    listadoDeTurnos:(req,res) => {res.render("listadoDeTurnos")},
}

module.exports = controlador;