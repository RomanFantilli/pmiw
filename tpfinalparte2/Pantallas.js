class Pantallas {
  constructor() {
    this.modo = "instrucciones";
  }

  mostrarInstrucciones() {
    background(0);
    imageMode(CENTER);
    image(img13, width / 2, height / 2, width, height); 
  }

  mostrarCreditos() {
    background(0);
    imageMode(CENTER);
    image(img14, width / 2, height / 2, width, height);
    fill(60);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("B para volver", width / 2, height - 150);
  }

  mostrarOpcionesFinal(gano) {
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(gano ? "¡Ganaste!" : "¡Perdiste!", width / 2, height / 2 - 40);
    textSize(20);
    text("Presioná R para volver a jugar", width / 2, height / 2 + 10);
    text("Presioná C para ver créditos", width / 2, height / 2 + 40);
    pop();
  }
}
