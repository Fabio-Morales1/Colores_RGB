let Rojo_mas = document.getElementById("Rojo_mas")
let Rojo_menos = document.getElementById("Rojo_menos")
let Verde_mas = document.getElementById("Verde_mas")
let Verde_menos = document.getElementById("Verde_menos")
let Azul_mas = document.getElementById("Azul_mas")
let Azul_menos = document.getElementById("Azul_menos")

let red = 0;
let green = 0;
let blue = 0;

function rojoMas() {
    red += 5;
    if (red > 255)
        red = 255;
    updateRGB();
}
function rojoMenos() {
    red -= 5;
    if (red < 0)
        red = 0;
    updateRGB();
}
function verdeMas() {
    green += 5;
    if (green > 255)
        green = 255;
    updateRGB();
}
function verderMenos() {
    green -= 5;
    if (green < 0)
        green = 0;
    updateRGB();
}
function azulMas() {
    blue += 5;
    if (blue > 255)
        blue = 255;
    updateRGB();
}
function azulMenos() {
    blue -= 5;
    if (blue < 0)
        blue = 0;
    updateRGB();
}

function updateRGB() {
    document.getElementById("rgb-value").innerHTML = `RGB (${red}, ${green}, ${blue})`;

    // Cambiar el fondo de la página
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

Rojo_mas.addEventListener("click", rojoMas);
Rojo_menos.addEventListener("click", rojoMenos);
Verde_mas.addEventListener("click", verdeMas);
Verde_menos.addEventListener("click", verderMenos);
Azul_mas.addEventListener("click", azulMas);
Azul_menos.addEventListener("click", azulMenos);
