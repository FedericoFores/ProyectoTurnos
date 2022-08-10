const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();
const path = require("path");

router.get('/',mainController.index);
router.get('/login',mainController.login);
router.get('/listadoDeTurnos',mainController.listadoDeTurnos);
router.get('/admin/turno',mainController.turno);

router.post('/login',mainController.login);

router.get ("/add",mainController.add);
router.post ("/add",mainController.create);

/*router.post('/login',userController.fuctionloLogin);*/

module.exports = router