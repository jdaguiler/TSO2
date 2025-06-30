function mostrarHora() {
    const ahora = new Date();
    document.getElementById("hora").innerText = `Hora actual: ${ahora.toLocaleTimeString()}`;
  }
  