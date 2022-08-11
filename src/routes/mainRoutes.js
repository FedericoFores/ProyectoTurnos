const express = require('express');
const path = require('path');
const Router = express.Router();
const mainController = require("../controllers/mainController")
const validator = require(path.join(__dirname, '..', 'middleware', 'express-validator.js'));
const guestMiddleware = require("../middleware/guestMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const { body } = require('express-validator');

router.get('/login', guestMiddleware, mainController.login);
router.post('/login', [
    body('email')
        .isEmail().withMessage('Por favor escribe un email válido'),
    body('password')
        .notEmpty().withMessage('Por favor escribe tu contraseña').bail()
        .isLength({ min: 8 }).withMessage('Su contraseña debe tener más de ocho caracteres.')
], userController.processLogin);

router.get('/',mainController.index);
router.get('/listadoDeTurnos',mainController.listadoDeTurnos);
router.get('/admin/turno',mainController.turno);
router.get('/admin/sector',mainController.sector);

router.post('/login',mainController.login);

router.get ("/add",mainController.add);
router.post ("/add",mainController.create);

router.get("/profile", authMiddleware, mainController.profile);
router.get('/logout', mainController.logout);

module.exports = router;








