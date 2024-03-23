
const formElement = document.getElementById("formularioRegistro")


formElement.addEventListener("submit", (event) => {
    event.preventDefault(); //evita el reload del navegador
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value
    let compañia = document.getElementById("compania").value
    let pais = document.getElementById("pais").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value

    let datosUsuario = {Name : nombre , Surname : apellido , Company : compañia , Country : pais , Pass : password , Email : email}
    let datosUsuarioJson = JSON.stringify(datosUsuario);

    
    fetch("http://localhost:3000/api/register" , {     
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: datosUsuarioJson
    })
})







