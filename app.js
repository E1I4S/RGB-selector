// Selecciona los elementos del DOM.
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const textoRed = document.getElementById('texto-red');
const textoGreen = document.getElementById('texto-green');
const textoBlue = document.getElementById('texto-blue');

// Inicializa los valores RGB desde los inputs
let red = parseInt(inputRed.value);
let green = parseInt(inputGreen.value);
let blue = parseInt(inputBlue.value);

// Muestra los valores iniciales en los elementos <p>.
textoRed.textContent = red;
textoGreen.textContent = green;
textoBlue.textContent = blue;

// Función para actualizar el color de la página
function actualizarColor(red, green, blue) {
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Se encarga del input del color rojo
inputRed.addEventListener('input', (change) => {
  red = Math.max(0, Math.min(255, parseInt(change.target.value))); // Asegura que el valor esté entre 0 y 255
  textoRed.textContent = red;
  actualizarColor(red, green, blue);
});

// Se encarga del input del color verde
inputGreen.addEventListener('input', (change) => {
  green = Math.max(0, Math.min(255, parseInt(change.target.value))); // Asegura que el valor esté entre 0 y 255
  textoGreen.textContent = green;
  actualizarColor(red, green, blue);
});

// Se encarga del input del color azul
inputBlue.addEventListener('input', (change) => {
  blue = Math.max(0, Math.min(255, parseInt(change.target.value))); // Asegura que el valor esté entre 0 y 255
  textoBlue.textContent = blue;
  actualizarColor(red, green, blue);
});
