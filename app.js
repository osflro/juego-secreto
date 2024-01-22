let numeroSecreto = 0;
let intentos = 0;
let listaMumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el Número en  ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El Número secreto es menor');
        }else{
            asignarTextoElemento('p','El Número secreto es mayor');
        }
        intentos++;   
        limpiarCaja();     
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value ='';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaMumerosSorteados);

    //si ya fueron sorteados todos los nros
    if (listaMumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya fueron sorteados todos los números posibles');
    } else{
    //si el nro generado esta en la lista     
       if (listaMumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
       } else {
           listaMumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos ++;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de nro
    condicionesIniciales();  
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();