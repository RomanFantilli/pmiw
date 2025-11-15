class Enemigo {
  constructor(velocidad, juego) {
    this.juego = juego;
    this.x = random(width);
    this.y = -random(50, 150);
    this.tam = 50;
    this.vel = velocidad;
    this.imagenes = [img1, img2, img3];
    this.img = random(this.imagenes);
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.tam, this.tam);
    pop();
  }

  actualizar() {
    this.y += this.vel;
  }

  reciclar() {
    if (this.y > height + 100) {
      this.x = random(width);
      this.y = -random(50, 150);
      this.tam = 50;
      this.img = random(this.imagenes);
    }
  }

  colisionConPersonaje(p) {
    let d = dist(this.x, this.y, p.posX, p.posY + 25);
    if (d < (this.tam / 2 + personajeAncho / 2)) {
      this.juego.restarPunto();
      this.y = height + 200;
    }
  }
}
