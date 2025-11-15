class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.terminadoJuego = false;
    this.gano = false;
    this.puntaje = 0;
    this.meta = 25;

    this.crearEnemigos();
    this.crearPersonaje();
    this.crearComida();
    this.crearFondo();
    this.crearPlancha();
    this.crearContadorTiempo();
    this.crearBarra();
  }

  dibujar() {
    this.fondo.dibujar();
    this.plancha.dibujar();

    this.personaje.teclaPresionada();
    this.personaje.delimitarPersonaje();
    this.personaje.dibujar();

    for (let c of this.comidas) {
      c.actualizar();
      c.reciclar();
      c.dibujar();
      c.colisionConPersonaje(this.personaje);
    }

    this.barra.dibujar(this.puntaje, this.meta);

    this.contadortiempo.actualizar();
    this.contadortiempo.dibujar();

    if (this.contadortiempo.estaTerminado()) this.terminar();

    for (let enemigo of this.enemigos) {
      enemigo.actualizar();
      enemigo.reciclar();
      enemigo.dibujar();
      enemigo.colisionConPersonaje(this.personaje);
    }
  }

  crearBarra() {
    this.barra = new Barra();
  }
  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(random(2, 5), this));
    }
  }
  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 380);
  }
  crearComida() {
    this.comidas = [];
    for (let i = 0; i < 3; i++) this.comidas.push(new Comida(random(2, 3), this));
  }
  crearFondo() {
    this.fondo = new Fondo(width / 2, height / 2);
  }
  crearPlancha() {
    this.plancha = new Plancha(width / 2, 415);
  }
  crearContadorTiempo() {
    this.contadortiempo = new ContadorTiempo();
  }

  terminar() {
    this.terminadoJuego = true;
    this.gano = false;
    this.personaje.estado = "triste";
    sndJuego.stop();
    sndPerder.play();
  }
  sumarPunto() {
    this.puntaje++;
    if (this.puntaje >= this.meta) this.ganar();
  }
  restarPunto() {
    this.puntaje = max(0, this.puntaje - 1);
    this.barra.mostrarRojo = true;
    setTimeout(() => this.barra.mostrarRojo = false, 300);
  }
  ganar() {
    this.terminadoJuego = true;
    this.gano = true;
    this.personaje.estado = "feliz";
    sndJuego.stop();
    sndGanar.play();
  }
}
