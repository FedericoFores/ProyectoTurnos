const express = require ("express")
const app = express()
const path = require ("path");
const mainRoutes = require ("./routes/mainRoutes");
const validator = require(path.join(__dirname, '..', 'middleware', 'express-validator.js'));
const guestMiddleware = require("../middleware/guestMiddleware");
const { body } = require('express-validator');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"../public")));
app.set ('view engine','ejs');
app.set ("views",path.join(__dirname,"/views"));
app.use('/',mainRoutes);
app.listen(3000, () =>{
     console.log("Servidor Funcionando en 3000")
});
