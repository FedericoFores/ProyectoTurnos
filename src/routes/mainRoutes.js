const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();
const path = require("path");

router.get('/',mainController.index);
router.get('/login',mainController.login);
router.get('/listadoDeTurnos',mainController.listadoDeTurnos);
router.get('/admin/turno',mainController.turno);
router.get('/admin/proximoTurno',mainController.proximoTurno)
//router.get('/add',mainController.add);
router.post('/login/add', mainController.create);
module.exports = router