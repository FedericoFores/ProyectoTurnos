const express = require ("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000;
const mainRoutes = require ('./routes/mainRoutes');

app.use(express.static("./public"));
app.use('/',mainRoutes);
app.set ('view engine','ejs');
app.listen(PORT, () => console.log("Servidor Funcionando"));
