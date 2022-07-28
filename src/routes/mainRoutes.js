const express = require("express");
const mainController = require("../controllers/mainControllers")

const router = express.Router();

router.get('/vistaTurnos',mainController.vistaTurnos);

router.get('/login',mainController.login);

module.exports = router