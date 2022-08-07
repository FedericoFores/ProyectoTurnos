const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();
router.get('/',mainController.index);
router.get('/login',mainController.login);
router.get('/listadoDeTurnos',mainController.listadoDeTurnos);
router.get('/turno',mainController.turno);
<<<<<<< HEAD
router.post('/login',mainController.login);
=======
<<<<<<< HEAD
=======

router.post('/login',mainController.login);

router.post('turno',mainController.turno);
>>>>>>> c448bbd8e566d5afbdf6eace20baa746b2c34194
>>>>>>> 3da451c3ade4c290f0b04120eebcce85958ce51d
module.exports = router