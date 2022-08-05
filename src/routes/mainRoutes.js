const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();
router.get('/',mainController.index);
router.get('/login',mainController.login);
router.get('/listadoDeTurnos',mainController.listadoDeTurnos);
router.get('/turno',mainController.turno);

router.post('/login',mainController.login);

router.post('turno',mainController.turno);
module.exports = router