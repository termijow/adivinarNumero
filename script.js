function seleccionarElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    } else {
        console.error(`El elemento ${elemento} no se encontró.`);
    }
}

function seleccionarElementoId(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function numeroUsuario() {
    let numero = prompt("Ingresa el numero: ");
    console.log(numero);
}

function generarNumeroAleatorio () {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    console.log(numeroAleatorio);
}

function textoInput() {
    let numeroUsuario = document.getElementById('numeroUsuario');
    let numero = numeroUsuario.value;
    console.log(numero);
    return numero;
}

textoInput();
generarNumeroAleatorio();


