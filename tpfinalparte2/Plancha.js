class Plancha {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar() {
    image(img10, this.posX, this.posY, 640, 150);
  }
}
