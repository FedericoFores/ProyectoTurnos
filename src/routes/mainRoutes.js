const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();

router.get('/login',mainController.login);
router.get('/vistaTurnos',mainController.vistaTurnos);
module.exports = router