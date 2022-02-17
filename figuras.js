// CUADRADO
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
} 

// TRIÁNGULO
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

// CÍRCULO

function diametroCirculo(radio) {
    return radio * 2;
} 

const PI = Math.PI;

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
   return (radio * radio) * PI;
} 



// Aquí interactuamos con el HMTL

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es " + area);
}

// Triángulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTriLado1");
    const inputLado2 = document.getElementById("inputTriLado2");
    const inputBase = document.getElementById("inputTriBase");
    const lado1 = parseInt(inputLado1.value);
    const lado2 = parseInt(inputLado2.value);
    const base = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perímetro del triángulo es " + perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputTriBase");
    const inputAltura = document.getElementById("inputTriAltura");
    const base = parseInt(inputBase.value);
    const altura = parseInt(inputAltura.value);

    const area = areaTriangulo(base, altura);
    alert("El área del triángulo es " + area);
}

// Círculo
function obtenerRadio() {
    const inputCirculo = document.getElementById("inputCirculo");
    const radio = parseInt(inputCirculo.value);

    return radio
}

function calcularDiametroCirculo() {
    radio = obtenerRadio()
    const diametro = diametroCirculo(radio)
    alert("El diámetro del círculo es " + diametro)
}

function calcularPerimetroCirculo() {
    radio = obtenerRadio()
    const perimetro = perimetroCirculo(radio)
    alert("El perímetro del círculo es " + perimetro)
}

function calcularAreaCirculo() {
    radio = obtenerRadio()
    const area = areaCirculo(radio)
    alert("El perímetro del círculo es " + area)
}