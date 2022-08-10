const baseDeDatos = require("../database/models")
const path = require ("path");
const controlador = {
    index:async(req,res) => {
        let listadoDeTurnos = await baseDeDatos.orderly_turn.findAll({
            limit:3
        })
        res.render("vistaTurnos.ejs", {listadoDeTurnos})},
    login:(req,res) => {res.render("login")},
    listadoDeTurnos:(req,res) => {res.render("listadoDeTurnos")},
    turno:async(req,res) => {
    const letra = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let letraAleatoria = letra[Math.floor(Math.random() * 27)];
    let valor = Math.floor(Math.random() * 99)
    let turno = `${letraAleatoria}${valor}`
    await baseDeDatos.orderly_turn.create({
        code:turno, box:""
    })
    return res.json({
        codigo:turno
    })},
    add: function (req,res){
        res.render ("Iniciar sesión");
    },
    create: function(req,res) {
        baseDeDatos.users.create({
        name:req.body.txtNombre,
        password:req.body.txtContraseña,
    });
    res.redirect ("/");
    }
}

module.exports = controlador;
