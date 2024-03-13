function encriptar() {
    var texto = document.getElementById("texto").value;
    if (!validarTexto(texto)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos ni caracteres especiales.");
        return;
    }
    var resultado = encriptarTexto(texto);
    document.getElementById("resultado").value = resultado;
}

function desencriptar() {
    var texto = document.getElementById("resultado").value;
    if (!validarTexto(texto)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos ni caracteres especiales.");
        return;
    }
    var resultado = desencriptarTexto(texto);
    document.getElementById("resultado").value = resultado;
}

function validarTexto(texto) {
    var regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptarTexto(texto) {
    return texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    }

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiarResultado() {
    var resultado = document.getElementById("resultado").value;
    var tempInput = document.createElement("textarea");
    tempInput.value = resultado;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Texto copiado al portapapeles: " + resultado);
}

function limpiarCampos() {
    document.getElementById("texto").value = "";
    document.getElementById("resultado").value = "";
}