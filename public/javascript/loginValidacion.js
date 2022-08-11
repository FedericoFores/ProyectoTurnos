const nombre = document.getElementById("txtNombre");
const password = document.getElementById("txtContraseña");
const form = document.getElementById("formularioLogin");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length < 6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(password.value.length < 8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Sesion Iniciada"
    }
})
