class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.estado = "normal"; // puede ser "normal", "feliz" o "triste"
  }

  teclaPresionada(keyCode) {
    if (keyIsDown(LEFT_ARROW)) this.moverIzquierda();
    if (keyIsDown(RIGHT_ARROW)) this.moverDerecha();
  }

  delimitarPersonaje() {
    if (this.posX < personajeAncho / 2) {
      this.posX = personajeAncho / 2;
    }
    if (this.posX > width - personajeAncho / 2) {
      this.posX = width - personajeAncho / 2;
    }
  }

  dibujar() {
    imageMode(CENTER);

    if (this.estado === "feliz" && typeof img16 !== "undefined") {
      image(img16, this.posX, this.posY, personajeAncho, personajeAncho);
      image(img12, this.posX - 87, this.posY + 60, personajeAncho, personajeAncho);
    } else if (this.estado === "triste") {
      image(img15, this.posX, this.posY + 10, personajeAncho, personajeAncho);
      image(img12, this.posX - 87, this.posY + 70, personajeAncho, personajeAncho);
    } else {
      image(img11, this.posX, this.posY, personajeAncho, personajeAncho);
    }
  }

  moverDerecha() {
    this.posX += 5;
  }
  moverIzquierda() {
    this.posX -= 5;
  }
}
