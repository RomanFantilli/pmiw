class Fondo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar() {
    image(img8, this.posX, this.posY, 640, 480);
  }
}
