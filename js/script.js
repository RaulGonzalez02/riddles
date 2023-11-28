const adivinanza = document.getElementById("adivinanza")
const respuesta = document.getElementById("respuesta")
const adivinanza_eleccion = document.getElementById("adivinanza_eleccion")
const respuesta_eleccion = document.getElementById("respuesta_eleccion")
const btn_comprobar = document.getElementById("btn_comprobar")
const btn_jugar = document.getElementById("btn_jugar")



//funcion para añadir tanto adivinazas seleccionadas como respuestas selecionadas
const aniadirElemento = (event, capa_destino, capa_origen) => {
    capa_destino.append(event.target)

}

adivinanza.addEventListener("click", (event) => {
    if (event.target.nodeName == "DIV")
        aniadirElemento(event, adivinanza_eleccion, adivinanza)
});

respuesta.addEventListener("click", (event) => {
    if (event.target.nodeName == "DIV")
        aniadirElemento(event, respuesta_eleccion, respuesta)
});

btn_comprobar.addEventListener("click", () => {
    // Esta es la función que debes crear para comprobar si la respuesta es correcta
    const res = respuesta_eleccion.querySelectorAll("DIV");
    const adiv = adivinanza_eleccion.querySelectorAll("DIV");

    let comprobarAdivinanza;
    let comprobarRespuesta;

    for (i = 0; i < adiv.length || i < res.length; i++) {
        comprobarAdivinanza = adiv[i].textContent;
        comprobarRespuesta = res[i].textContent;
        if (comprobarAdivinanza.includes(comprobarRespuesta)) {
            adiv[i].style.backgroundColor = "green";
            res[i].style.backgroundColor = "green";
        }
        else {
            adiv[i].style.backgroundColor = "red";
            res[i].style.backgroundColor = "red";
        }
    }
    //para que cambie el boton, desaparezca comprobar y aparezca comenzar
    if(adivinanza.children.length==0 && respuesta.children.length==0){
        btn_comprobar.style.display="none"
        btn_jugar.style.display="block"
    }
})

//Volver a jugar
btn_jugar.addEventListener("click", () => {
    window.location.reload();
})