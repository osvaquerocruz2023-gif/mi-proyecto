//declaramos las variables
let tesoro = Math.floor(Math.random() * 9);
let intentos = 3;

//se crea la funcion para identificar una celda
function verificar(posicion) {
    let celdas = document.getElementsByClassName("cell");

    // Evita seguir jugando si ya terminó
    if (intentos === 0) return;

    // Evita repetir clic en misma celda
    if (celdas[posicion].style.pointerEvents === "none") return;

    // se descuenta intento de 1 en 1, hasta llegar a 0
    intentos--;

    // se prepara la condicion de comparar la posicion del mouse contra la de donde esta el tesoro
    if (posicion === tesoro) {
        celdas[posicion].style.backgroundColor = "gold";
        celdas[posicion].textContent = "💎";
        document.getElementById("mensaje").textContent = "¡Felicidades encontraste el tesoro! ";
        desactivarTodo();
    } else {
        celdas[posicion].style.backgroundColor = "gray";
        celdas[posicion].textContent = "✖";
        celdas[posicion].style.pointerEvents = "none";

        if (intentos === 0) {
            document.getElementById("mensaje").textContent = "💀 ¡Uy! Lo siento perdiste";
            mostrarTesoro();
            desactivarTodo();
        } else {
            document.getElementById("mensaje").textContent =
                "Sigue buscando... Intentos restantes: " + intentos;
        }
    }
}
