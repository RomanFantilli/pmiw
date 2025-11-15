class ContadorTiempo {
  constructor() {
    this.tiempoInicial = 90;
    this.tiempoRestante = this.tiempoInicial;
    this.ultimoSegundo = millis();
    this.posX = 20;
    this.posY = 20;
    this.terminado = false;
  }

  actualizar() {
    let ahora = millis();
    if (ahora - this.ultimoSegundo >= 1000 && !this.terminado) {
      this.tiempoRestante--;
      this.ultimoSegundo = ahora;
    }

    if (this.tiempoRestante <= 0) {
      this.tiempoRestante = 0;
      this.terminado = true;
    }
  }

  dibujar() {
    push();
    imageMode(CORNER);
    image(img9, this.posX, this.posY, 150, 60);
    fill(0);
    textSize(25);
    textAlign(LEFT, TOP);
    text(this.formatearTiempo(), this.posX + 40, this.posY + 20);
    pop();
  }

  formatearTiempo() {
    let minutos = floor(this.tiempoRestante / 60);
    let segundos = this.tiempoRestante % 60;
    if (segundos < 10) segundos = "0" + segundos;
    return `${minutos}:${segundos}`;
  }

  reiniciar() {
    this.tiempoRestante = this.tiempoInicial;
    this.terminado = false;
    this.ultimoSegundo = millis();
  }

  estaTerminado() {
    return this.terminado;
  }
}
