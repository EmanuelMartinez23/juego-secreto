// DOM
let intentos = 1;
let numeroMaximo = 10;
// lista ara alacenar los numeros ya sorteados
let numerosSorteados= [];
let numeroSecreto = generarNumeroSecreto(); 

// funcion para asignar texto a una etiqueta 
function asignarTextElement(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    // acceder a los metodos de esa etiqueta 
    elementoHTML.innerHTML = texto;
}

// Desarrollamos la funcion del evento del boton de intentar 
function verificarIntento(){
    // vamos a capturar lo que el usuario capturo en el input 
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value) ;
    if(numeroSecreto == numeroUsuario) {
        asignarTextElement('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        // vamos a activar el boton Nuevo juego, quitar el disabled
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        // si el usuario no acerto 
        if(numeroUsuario < numeroSecreto){
            asignarTextElement('p', 'El número secreto es mayor.');
        }else {
            asignarTextElement('p', 'El número secreto es menor.');
        }
        intentos++;
        limpiarCaja();
    }
    
}
function condicionesIniciales(){
    // llamamos a la funcion para modicar el texto del h1 
    asignarTextElement('h1', 'Juego del número secreto');
    // lo mismo para el texto de la etiqueta p
    asignarTextElement('p',`Indica un número del 1 al ${numeroMaximo}`);
    // Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();

    // inicializar el número de intentos en 1
    intentos = 1;
}
function reiniciarJuego(){
    // limpiar la caja 
    limpiarCaja();
    // Indicar el mensaje de intervalo de numeros
    condicionesIniciales();
    // Dejar el boton deshabilitado
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

// funcion para limpiar del input
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

// funcion para generar un numero aleatorio 
function generarNumeroSecreto() {
    // almacenamos el numero en la lista
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) +1 ;
    console.log(numeroGenerado)
    console.log(numerosSorteados)

    if(numerosSorteados.length == numeroMaximo){
        // si ya todos los numeros estan en la lista mostrar un mensaje 
        asignarTextElement('p', 'Ya se sortearón todos los números posibles.')

    }else {
        // si no seguir jugando
        if(numerosSorteados.includes(numeroGenerado)){
            // si existe ya no lo devuelvas 
            // creamos un numero random de nuevo 
            return generarNumeroSecreto(); // recursividad 
        }else {
            //lo guardamos porque si ya va salir ya la soiguienbte no 
            numerosSorteados.push(numeroGenerado);
            // si no esta lo retornamos 
            return numeroGenerado;
        }
    
    }
    

     
}
condicionesIniciales();


console.log(numeroSecreto);