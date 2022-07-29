const express = require ("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000;

let rutasMain = require('./routes/main.js');

app.use('/', rutasMain);

app.use(express.static(path.join(__dirname,"../","public")))

app.listen(PORT, () => console.log("Servidor Funcionando"))