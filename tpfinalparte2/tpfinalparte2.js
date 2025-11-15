//https://youtu.be/urdq5L3CojU
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16;
let sndMenu, sndJuego, sndGanar, sndPerder;
let personajeAncho = 180;
let objJuego = null;
let pantallas;
let sonidoActual = ""; 

function preload() {
  img1 = loadImage('sprites/calzones.png');
  img2 = loadImage('sprites/medias.png');
  img3 = loadImage('sprites/ojo.png');
  img4 = loadImage('sprites/huevo.png');
  img5 = loadImage('sprites/pan.png');
  img6 = loadImage('sprites/pollo.png');
  img7 = loadImage('sprites/tomate.png');
  img8 = loadImage('sprites/fondoblur.png');
  img9 = loadImage('sprites/hud.png');
  img10 = loadImage('sprites/plancha.png');
  img11 = loadImage('sprites/sartenJake.png');
  img12 = loadImage('sprites/sartenSola.png');
  img13 = loadImage('sprites/instrucciones.png');
  img14 = loadImage('sprites/creditos.png');
  img15 = loadImage('sprites/jake_triste.png');
  img16 = loadImage('sprites/jake_feliz.png');

  sndMenu = loadSound('sounds/menu.mp3');
  sndJuego = loadSound('sounds/gameplay.mp3');
  sndGanar = loadSound('sounds/canciondeganastepapu.mp3');
  sndPerder = loadSound('sounds/perdistefag.mp3');
}

function setup() {
  createCanvas(640, 480);
  pantallas = new Pantallas();
  pantallas.modo = "instrucciones";
  reproducirMusica("menu"); 
}

function draw() {
  // pantallas
  if (pantallas.modo === "instrucciones") {
    pantallas.mostrarInstrucciones();

  } else if (pantallas.modo === "juego") {

    if (!objJuego) {
      objJuego = new Juego(6);
    }

    objJuego.dibujar();

    if (objJuego.terminadoJuego) {
      objJuego.fondo.dibujar();
      objJuego.plancha.dibujar();
      objJuego.personaje.dibujar();
      pantallas.mostrarOpcionesFinal(objJuego.gano);

      if (objJuego.gano && sonidoActual !== "ganar") {
        reproducirMusica("ganar");
      } else if (!objJuego.gano && sonidoActual !== "perder") {
        reproducirMusica("perder");
      }
    }

  } else if (pantallas.modo === "creditos") {
    pantallas.mostrarCreditos();
  }
}

function reproducirMusica(modo) {
  if (sonidoActual === modo) return;

  detenerTodosLosSonidos();

  switch (modo) {
    case "menu":
      sndMenu.loop();
      break;
    case "juego":
      sndJuego.loop();
      break;
    case "ganar":
      sndGanar.play();
      break;
    case "perder":
      sndPerder.play();
      break;
  }

  sonidoActual = modo;
}

function detenerTodosLosSonidos() {
  sndMenu.stop();
  sndJuego.stop();
  sndGanar.stop();
  sndPerder.stop();
}

function keyPressed() {
  if (pantallas.modo === "instrucciones" && keyCode === ENTER) {
    reproducirMusica("juego");
    pantallas.modo = "juego";
    objJuego = new Juego(6);
    return;
  }

  if (pantallas.modo === "instrucciones" && key === "c") {
    reproducirMusica("menu");
    pantallas.modo = "creditos";
    return;
  }

  if (pantallas.modo === "creditos" && key === "b") {
    reproducirMusica("menu");
    pantallas.modo = "instrucciones";
    return;
  }

if (key === "r" && objJuego && objJuego.terminadoJuego) {
  detenerTodosLosSonidos();   
  sonidoActual = "";             
  reproducirMusica("juego");   

  objJuego = new Juego(6);
  pantallas.modo = "juego";
  return;
}

  if (objJuego && objJuego.terminadoJuego && key === "c") {
    reproducirMusica("menu");
    pantallas.modo = "creditos";
    return;
  }
}
