const nombre = document.getElementById("txtNombre");
const password = document.getElementById("txtContraseña");
const form = document.querySelector("form");
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
        fetch("http://localhost:3000/login/add", {
            method : 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({user : nombre.value , pass: password.value})
        }).then(respuesta => respuesta.json()).then(respuestaf => {
        return location.href = "http://localhost:3000";
    })}

})
