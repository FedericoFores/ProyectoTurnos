<<<<<<< HEAD
console.log("Holaa")
console.log("Hola DH")
=======
const express = require ("express")
const app = express()
const path = require ("path");
const mainRoutes = require ("./routes/mainRoutes");
app.use(express.json());
app.use(express.static(path.join(__dirname,"../public")));
app.set ('view engine','ejs');
app.set ("views",path.join(__dirname,"/views"));
app.use('/',mainRoutes);
app.listen(3000, () =>{
     console.log("Servidor Funcionando en 3000")
});
>>>>>>> 8c7cdf385b56b222783394659a5c32d8efec3d97
