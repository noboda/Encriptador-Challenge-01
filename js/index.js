// Obteniendo elementos del DOM
const ingresoTexto = document.getElementById("ingreso-texto");
const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const botonCopiar = document.getElementById("boton-copiar");
const mensajeFinal = document.getElementById("mensaje-final");
const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("right-info");
const right = document.getElementById("right");

// Conjunto de reemplazos para encriptar/desencriptar
const remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

// Funcion para mostrar el nuevo valor en el mensaje final y actualizar la interfaz
const remplace = (nuevoValor) => {
  mensajeFinal.textContent = nuevoValor;
  munheco.classList.add("none");
  ingresoTexto.value = "";
  rightInfo.style.display = "none";
  botonCopiar.style.display = "block";
  right.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar");
};

// Funcion para restablecer la interfaz a su estado original
const reset = () => {
  mensajeFinal.textContent = "";
  munheco.classList.remove("none");
  rightInfo.style.display = "block";
  botonCopiar.style.display = "none";
  right.classList.remove("ajustar");
  mensajeFinal.classList.remove("ajustar");
  ingresoTexto.focus();
};

// Funcion para encriptar el texto
function encriptar(newText) {
  const remplazarLength = remplazar.length;
  for (let i = 0; i < remplazarLength; i++) {
    if (newText.includes(remplazar[i][0])) {
      newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
    }
  }
  return newText;
}

// Funcion para desencriptar el texto
function desencriptar(newText) {
  const remplazarLength = remplazar.length;
  for (let i = 0; i < remplazarLength; i++) {
    if (newText.includes(remplazar[i][1])) {
      newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
    }
  }
  return newText;
}

// Event listener para los botones de encriptar, desencriptar y copiar
document.addEventListener("click", (event) => {
  if (event.target.id === "boton-encriptar") {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto !== "") {
      remplace(encriptar(texto));
    } else {
      alert("Ingrese texto a encriptar");
      reset();
    }
  } else if (event.target.id === "boton-desencriptar") {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto !== "") {
      remplace(desencriptar(texto));
    } else {
      alert("Ingrese texto a desencriptar");
      reset();
    }
  } else if (event.target.id === "boton-copiar") {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado");
    reset();
  }
});