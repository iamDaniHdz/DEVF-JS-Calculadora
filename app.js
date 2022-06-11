const botonNumeros = document.getElementsByName('btn-number');
const botonOperacion = document.getElementsByName('btn-opera');
const botonIgual = document.getElementsByName('btn-igual')[0];
const botonDelete = document.getElementsByName('btn-delete')[0];

var result = document.getElementById('result')
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText); // funcion para mandar los numeros en el display
    })
})

botonOperacion.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText); // funcion que selecciona el tipo de operacion
    })
})

botonIgual.addEventListener('click', function () {
    calcular(); // funcion que realiza el calculo
    actualizarDisplay(); // funcion que actualiza el display
})

botonDelete.addEventListener('click', function () {
    clear(); // funcion que limpia el display
    actualizarDisplay(); // funcion que actualiza el display
})

// funcion que selecciona el tipo de operacion
function selectOperacion(ope) {
    if (operacionActual === '') return;
    if (operacionAnterior !== '') {
        calcular()
    }
    operacion = ope.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

// funcion que realiza el calculo
function calcular() {
    var calculo;
    const opeAnterior = parseFloat(operacionAnterior);
    const opeActual = parseFloat(operacionActual);
    if (isNaN(opeAnterior) || isNaN(opeActual)) return;
    switch (operacion) {
        case '/':
            calculo = opeAnterior / opeActual;
            break;
        case '-':
            calculo = opeAnterior - opeActual;
            break;
        case '+':
            calculo = opeAnterior + opeActual;
            break;
        case 'x':
            calculo = opeAnterior * opeActual;
            break;

        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

// funcion para mandar los numeros en el display
function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

// funcion que limpia el display
function clear() {
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}

// funcion que actualiza el display
function actualizarDisplay() {
    result.value = operacionActual
}

clear();