// Seleccionar el div del Pokémon
const pokemon = document.getElementById("pokemon");

// Establecer posición inicial
let topPosition = 200;
let leftPosition = 200;

// Función que escucha las teclas para mover el personaje
document.addEventListener('keydown', (event) => {
    const step = 10;  // Cuántos píxeles se mueve por cada pulsación

    switch (event.key) {
        case "ArrowUp":
            topPosition -= step;
            break;
        case "ArrowDown":
            topPosition += step;
            break;
        case "ArrowLeft":
            leftPosition -= step;
            break;
        case "ArrowRight":
            leftPosition += step;
            break;
    }

    // Limitar el movimiento para no salir del contenedor
    topPosition = Math.max(0, Math.min(topPosition, 350)); // El tamaño del contenedor es 400px
    leftPosition = Math.max(0, Math.min(leftPosition, 350));

    // Actualizar la posición del personaje
    pokemon.style.top = topPosition + "px";
    pokemon.style.left = leftPosition + "px";
});
