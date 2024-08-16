const textUsuario = document.querySelector(".baseEncriptadorContenidoBienvenidaTexusuario");
const mostrarTexto = document.querySelector(".mostrarEncriptado");

let textEncriptado = [];
let textDesencriptado = [];
let mostrarEncrip = "";
let mostrarDesencrip = "";

/* 
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

function botonEncriptar(){
    const textoEncriptado = encriptado (textUsuario.value);
    mostrarTexto.value = mostrarEncrip;
    document.getElementById("baseDesencriptadorImg").style.display = "none";
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptado (textUsuario.value);
    mostrarTexto.value = mostrarDesencrip;
}

function encriptado(txtEncriptado) {
    mostrarEncrip = "";
    txtEncriptado = txtEncriptado.toLowerCase()
    for(let contador=0; contador < txtEncriptado.length; contador++){
        if (txtEncriptado[contador] === 'a'){
            textEncriptado[contador] = 'ai'
        }else if (txtEncriptado[contador] === 'e'){
            textEncriptado[contador] = 'enter'
        }else if (txtEncriptado[contador] === 'i'){
            textEncriptado[contador] = 'imes'
        }else if (txtEncriptado[contador] === 'o'){
            textEncriptado[contador] = 'ober'
        }else if (txtEncriptado[contador] === 'u'){
            textEncriptado[contador] = 'ufat'
        }
        else{
            textEncriptado[contador] = txtEncriptado[contador];
        }
        mostrarEncrip = mostrarEncrip + textEncriptado[contador];
    }
    return txtEncriptado;
}

function desencriptado(txtEncriptado) {
    mostrarDesencrip = "";
    txtEncriptado = txtEncriptado.toLowerCase()
    for(let contador=0; contador < txtEncriptado.length; contador++){
        if (txtEncriptado[contador] === 'ai'){
            textDesencriptado[contador] = 'a';
        }else if (txtEncriptado[contador] === 'enter'){
            textDesencriptado[contador] = 'e';
        }else if (txtEncriptado[contador] === 'imes'){
            textDesencriptado[contador] = 'i';
        }else if (txtEncriptado[contador] === 'ober'){
            textDesencriptado[contador] = 'o';
        }else if (txtEncriptado[contador] === 'ufat'){
            textDesencriptado[contador] = 'u';
        }
        else{
            textDesencriptado[contador] = txtEncriptado[contador];
        }
        mostrarDesencrip = mostrarDesencrip + textDesencriptado[contador];
    }
    return mostrarDesencrip;
}