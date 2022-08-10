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






















/*
const $formularioLogin = document.getElementById('formularioLogin');
const $txtNombre = document.getElementById('txtNombre');
const $txtContraseña = document.getElementById('txtContraseña')


(function () {

    $formularioLogin.addEventListener('submit', function(e){
        e.preventDefault();
        let nombre = String($txtNombre.value).trim();
        let contraseña = String($txtContraseña.value).trim();
        if(nombre.length===0){
            alert("¡El nombre de usuario no puede ir vacio!");
        }
        if(contraseña.length<8){
            alert("¡La contraseña debe tener mas de 8 caracteres!")
        }
    })

})(); */