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
        res.render ("Iniciar sesionesss");
    },
    create: function(req,res) {
        console.log(36, req.body.user);
    
         baseDeDatos.users.create({
         name: req.body.user,
         password: req.body.pass,
         email: "cualquiera"
     });
     res.redirect("/")
    },
    proximoTurno: async(req, res) => {
        let turnoSeleccionado = await baseDeDatos.orderly_turn.findOne({});
        let turnoEliminado = await baseDeDatos.orderly_turn.destroy({where:{id:turnoSeleccionado.id}})
        res.json(turnoSeleccionado);
    }
}

module.exports = controlador;
