//https://youtu.be/C0BftRCO7Vc
let cursorEspada;
let pantallaInicio, imgIntro, pantalla1, pantalla2, pantalla3, pantalla4, pantalla5, pantalla6, pantalla7, pantalla8, pantalla9, pantalla10, pantalla11, pantalla12, pantalla13, pantalla14, pantalla15, pantalla16, pantalla17, pantalla18, pantalla19, pantallaCreditos;
let font;
let estado = 0;
let zonas = [];


let musicAventura;
let musicAventuraActiva = false;

function preload() {
  
  musicAventura = loadSound("assets/audio/cancion.mp3");
  pantallaInicio = loadImage('assets/pantallas.hda/pantallaInicio.jpg');
  imgIntro = loadImage('assets/pantallas.hda/intro.jpg');
  pantalla1 = loadImage('assets/pantallas.hda/pantalla1.jpg');
  pantalla2 = loadImage('assets/pantallas.hda/pantalla2.jpg');
  pantalla3 = loadImage('assets/pantallas.hda/pantalla3.jpg');
  pantalla4 = loadImage('assets/pantallas.hda/pantalla4.jpg');
  pantalla5 = loadImage('assets/pantallas.hda/pantalla5.jpg');
  pantalla6 = loadImage('assets/pantallas.hda/pantalla6.jpg');
  pantalla7 = loadImage('assets/pantallas.hda/pantalla7.jpg');
  pantalla8 = loadImage('assets/pantallas.hda/pantalla8.jpg');
  pantalla9 = loadImage('assets/pantallas.hda/pantalla9.jpg');
  pantalla10 = loadImage('assets/pantallas.hda/pantalla10.jpg');
  pantalla11 = loadImage('assets/pantallas.hda/pantalla11.jpg');
  pantalla12 = loadImage("assets/pantallas.hda/pantalla12.jpg");
  pantalla13 = loadImage("assets/pantallas.hda/pantalla13.jpg");
  pantalla14 = loadImage("assets/pantallas.hda/pantalla14.jpg");
  pantalla15 = loadImage("assets/pantallas.hda/pantalla15.jpg");
  pantalla16 = loadImage("assets/pantallas.hda/pantalla16.jpg");
  pantalla17 = loadImage("assets/pantallas.hda/pantalla17.jpg");
  pantalla18 = loadImage("assets/pantallas.hda/pantalla18.jpg");
  pantalla19 = loadImage("assets/pantallas.hda/pantalla19.jpg");
  cursorEspada = loadImage('assets/cursorEspada.png');
  font = loadFont('assets/Pieces_of_Eight.ttf');
  console.log('cursorEspada width:', cursorEspada.width, 'height:', cursorEspada.height);
}

function setup() {
  createCanvas(640, 480);
  noCursor();
  textFont(font);
  textSize(35);
  fill(0);
  console.log(!!pantalla1)
}

function draw() {
  if (estado == 0) {
    menu();
  } else if (estado == 1) {
    introScreen();
  } else if (estado == 2) {
    screen1();
  } else if (estado == 3) {
    screen2();
  } else if (estado == 4) {
    screen3();
  } else if (estado == 5) {
    screen4();
  } else if (estado == 6) {
    screen5();
  } else if (estado == 7) {
    screen6();
  } else if (estado == 8) {
    screen7();
  } else if (estado == 9) {
    screen8();
  } else if (estado == 10) {
    screen9();
  } else if (estado == 11) {
    screen10();
  } else if (estado == 12) {
    screen11();
  } else if (estado == 13) {
    screen12();
  } else if (estado == 14) {
    screen13();
  } else if (estado == 15) {
    screen14();
  } else if (estado == 16) {
    screen15();
  } else if (estado == 17) {
    screen16();
  } else if (estado == 18) {
    screen17();
  }
   else if (estado == 19) {
    screen18();
  }
     else if (estado == 20) {
    screen19();
  }
  
}

function menu() {

    zonas =[];
  background(140);
  if (pantallaInicio) image(pantallaInicio, 0, 0);

  fill(0);
  textSize(35);
  text("Comenzar", 30, 360);
  text("Créditos", 30, 400);

  textSize(20);
  fill(0);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function introScreen() {
    zonas =[];
  background(130);
  if (imgIntro) image(imgIntro, 0, 0);
  stroke(3);
  fill("#dcbf96");
  rect(70, 400, 500, 60);
  noStroke();
  fill(0);
  textSize(35);
  text("Una tarde en la tierra de Ooo...", 120, 440);
    botonSiguiente();
    zonaClic(548, 440, 85, 30, 2);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen1() {
  zonas =[];
  background("#6C3411");
  if (pantalla1) image(pantalla1, 0, 0);
  noStroke();
  fill(255, 255, 255, 220);

  // Rectngulo
  rect(40, 365, 500, 100, 20);

  // Triangulo
  triangle(161, 347, 173, 366, 150, 365);

  fill(0);
  textSize(28);
  text("Hermano, afuera siempre pasa algo raro.", 74, 404);
  text( "¿A dónde querés ir esta vez?", 74, 434);
  fill(255, 255, 255, 220);

  // Rectngulo
  rect(20, 35, 350, 130, 20);

  // Triangulo
  triangle(389, 135, 367, 120, 367, 140);
  fill(0);
  text("¡Jake! Estoy aburridísimo.", 40, 80);
  text("¡Necesito pelear contra algo,", 40, 110);
  text(" encontrar tesoros, lo que sea!", 40, 140);
  botonSiguiente();
    zonaClic(548, 440, 85, 30, 3);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen2() {
  zonas =[];
  background("#61d8ff");
  if (pantalla2) image(pantalla2, 0, 125);
  stroke(3);
  fill("#dcbf96");
  rect(0, 10, 450, 50);
  textSize(28);
  noStroke();
  fill(0);
  text("Los chicos salen por una nueva aventura", 15, 43);
  text("Bosque", 90, 185);
  text("Reino helado", 340, 185);
  textSize(20);
  fill("#092401");
  text("Elegí el lugar de tu nueva aventura!!", 10, 465);
    zonaClic(19, 150, 215, 60, 4); //bosque
    zonaClic(276, 148, 270, 60, 7); //Reino Helado
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen3() {
  zonas =[];
  background("#61d8ff");
  if (pantalla9) image(pantalla9, 0, 70);
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 450, 65);
  textSize(28);
  noStroke();
  fill(0);
  text("Finn y Jake caminan entre árboles gigantes", 15, 43);
  text("y raíces torcidas.", 15, 63);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 9);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen4() {
  zonas =[];
  background("#0FA5A1");
  if (pantalla7) image(pantalla7, 0, 60);
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 450, 70);
  textSize(28);
  noStroke();
  fill(0);
  text("Finn y Jake quedan atrapados en un bloque", 15, 43);
  text("gigante de hielo.", 15, 63);
  botonMenu();
  zonaClic(548, 440, 85, 30, 0);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

  //////////////////////////////////////////////////////////////////////////////////
function screen5() {
  zonas =[];
  background("#212121");
  if (pantalla3) image(pantalla3, 0, 45);
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 450, 55);
  textSize(28);
  noStroke();
  fill(0);
  text("Finn y Jake eligieron el plan chill", 15, 43);
  botonMenu();
  zonaClic(548, 440, 85, 30, 0);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen6() {
  zonas =[];
  background("#010071");
  if (pantalla4) image(pantalla4, 0, 60);
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 450, 70);
  textSize(28);
  noStroke();
  fill(0);
  text("El frío se siente desde lejos. Montañas de ", 15, 43);
  text("hielo y nieve rodean a Finn y Jake.", 15, 65);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 14);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen7() {
  zonas =[];
  background("#010071");
  if (pantalla6) image(pantalla6, 0, 60);
  noStroke();
  fill(255, 255, 255, 220);

  // Rectngulo
  rect(400, 110, 230, 80, 20);

  // Triangulo
  triangle(424, 188, 408, 185, 405, 206);
  textSize(22);
  fill(0);
  text("¡No quería llegar a esto…", 415, 145);
  textSize(25);
  text(" pero me obligás!", 415, 170);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 5);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen8() {
  zonas =[];
  background("#61d8ff");
  if (pantalla12) image(pantalla12, 0, 65);
  noStroke();
  fill(255, 255, 255, 220);

  // Rectngulo
  rect(400, 110, 230, 80, 20);

  // Triangulo
  triangle(424, 188, 408, 185, 405, 206);
  fill(0);
  textSize(20);
  text("¡Mira, Jake! Un mapa con un", 412, 138);
  text("dibujo extraño… dice La Ciu", 412, 160);
  text("dad de los Episodios Perdidos.", 412, 180);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 10);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen9() {
  zonas =[];
  background("#61d8ff");
  if (pantalla13) image(pantalla13, 0, 120);
  noStroke();
  fill(255, 255, 255, 220);

  // Rectngulo
  rect(275, 150, 290, 120, 20);

  // Triangulo
  triangle(334, 268, 295, 266, 293, 286);
  fill(0);
  textSize(22);
  text("Uff… eso suena peligroso.", 285, 175);
  text("¿Seguro que querés meterte en eso?", 285, 200);
  text("Tengo una mejor idea: BMO ", 285, 230);
  text("y sandwiches.", 285, 250);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 11);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen10() {
  zonas =[];
  background("#61d8ff");
  if (pantalla14) image(pantalla14, 0, 125);
  stroke(3);
  fill("#dcbf96");
  rect(377, 220, 170, 40);
  rect(70, 220, 235, 40);
  noStroke();
  fill(0);
  text("Ir de aventura", 397, 248);
  text("Rechazar la aventura", 76, 248);
  zonaClic(377, 220, 170, 40, 15);
  zonaClic(70, 220, 235, 40, 6);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////


function screen11() {
  zonas =[];
  background("#18168B");
  if (pantalla8) image(pantalla8, 0, 65);
  fill("#dcbf96");
  stroke(3);
  rect(0, 15, 450, 55);
  textSize(26);
  noStroke();
  fill(0);
  text(" Final alternativo:", 140, 35);
  text("Obligados a escuchar al Rey Helado", 43, 62);
  botonMenu();
  zonaClic(548, 440, 85, 30, 0);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen12() {
  zonas =[];
  background("#61d8ff");
  if (pantalla15) image(pantalla15, 0, 120);
  noStroke();
  fill(255, 255, 255, 220);
  // Rectngulo
  rect(350, 110, 230, 70, 20);
  // Triangulo
  triangle(410, 177, 435, 177, 433, 202);
  textSize(25);
  fill(0);
  text("¡Vamos, Jake!", 400, 155);
  fill(255, 255, 255, 220);
  // Rectngulo
  rect(90, 200, 230, 70, 20);
  // Triangulo
  triangle(178, 267, 162, 266, 152, 282);
  textSize(23);
  fill(0);
  text("Está bien, pero si me gana", 97, 232);
  text("la flojera no me hare cargo.", 95, 255);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen13() {
  zonas =[];
  background("#61d8ff");
  if (pantalla16) image(pantalla16, 0, 60);
  noStroke();
  fill(255, 255, 255, 220);
  // Rectngulo
  rect(300, 102, 245, 70, 20);
  rect(403, 241, 230, 50, 20);
  rect(195, 298, 200, 70, 20);
  // Triangulo
  triangle(301, 126, 301, 136, 288, 144);
  triangle(427, 242, 408, 248, 392, 216);
  triangle(207, 302, 226, 300, 230, 285);
  textSize(20);
  fill(0);
  text("¡Muajajaja! Justo a tiempo para", 305, 130);
  text("mi serenata eterna. ¡Prepárense!", 305, 150);

  text("¡Oh no, Jake, es el viejito loco", 407, 265);
  text("otra vez!", 407, 280);

  text("hermano, ¿lo calmamos o", 205, 324);
  text("lo congelamos a patadas", 205, 339);
  text("en el trasero?", 205, 354);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 20);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen14() {
  zonas =[];
  background("#61d8ff");
  if (pantalla17) image(pantalla17, 0, 60);
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 550, 70);
  textSize(28);
  noStroke();
  fill(0);
  text("Siguiendo el mapa, Finn y Jake llegan a un  edificio", 15, 43);
  text("aparentemente abandonado", 15, 63);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 16);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen15() {
  zonas =[];
  background("#61d8ff");
  if (pantalla11) image(pantalla11, 0, 60);
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 550, 70);
  textSize(28);
  noStroke();
  fill(0);
  text("al abrir la puerta se encuentran con algo inesperado", 15, 43);
  text("un show del Rey Helado", 15, 63);
  fill(255, 255, 255, 220);
  // Rectngulo
  rect(90, 285, 350, 45, 20);
  // Triangulo
  triangle(163, 326, 145, 326, 149, 344 );
  textSize(23);
  fill(0);
  text("Oh no… esto huele a… música rara.", 100, 315);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 17);

  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen16() {
  zonas =[];
  background("#61d8ff");
  if (pantalla11) image(pantalla11, 0, 60);

  fill(255, 255, 255, 220);
  // Rectngulo
  rect(145, 285, 300, 80, 20);
  rect(370, 84, 265, 70, 20);
  // Triangulo
  triangle(437, 353, 441, 340, 464, 358 );
  triangle(389, 150, 374, 143, 359, 157 );
  textSize(23);
  fill(0);
  text("¡Bienvenidos, público inesperado!", 377, 115);
  text("Hoy estreno mi gran ópera.", 377, 140);
  text("Jake… creo que caímos directo", 160, 315);
  text("en una trampa musical.", 160, 340);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 18);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen17() {
  zonas =[];
  background("#61d8ff");
  if (pantalla18) image(pantalla18, 0, 60);

  fill(255, 255, 255, 220);
  // Rectngulo
  rect(200, 285, 230, 40, 20);
  rect(370, 84, 265, 95, 20);
  // Triangulo
  triangle(416, 314, 421, 296, 439, 307);
  triangle(389, 150, 374, 143, 359, 157 );
  triangle(167, 288, 144, 289, 144, 307  );
  textSize(23);
  fill(0);
  text("¡Al fin alguien que aprecia mis canciones!", 377, 115);
  text("Ahora… escuchen mi ópera de", 377, 140);
  text("siete horas.", 377, 160);
  text("Oh glob… ¿qué hicimos?", 210, 310);
  fill(255, 255, 255, 220);
  rect(65, 193, 150, 100, 20);
  fill(0);
  text("Ey, Rey Helado,", 70, 220);
  text("tranquilo. ¿Por ", 70, 245);
  text("qué no hablamos", 70, 265);
  text("primero?", 70, 285);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 12);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen18() {
  zonas =[];
  background("#61d8ff");
  if (pantalla19) image(pantalla19, 0, 60);
  stroke(3);
  fill("#dcbf96");
  rect(0, 10, 525, 50);
  textSize(25);
  noStroke();
  fill(0);
  text("Finn corre hacia el Rey Helado con la espada levantada", 15, 43);
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 8);
    if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function screen19() {
  zonas =[];
  background("#61d8ff");
  if (pantalla16) image(pantalla16, 0, 60);
  stroke(3);
  fill("#dcbf96");
  rect(365, 273, 170, 40);
  rect(90, 270, 170, 40);
  noStroke();
  fill(0);
  text("Violencia", 410, 300);
  text("Dialogo", 140, 300);
  zonaClic(365, 273, 170, 40, 19); //violencia
  zonaClic(90, 270, 170, 40, 18); //dialogo
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}
function botonMenu() {
  let x = width - 90;
  let y = height - 40;
  let w = 80;
  let h = 30;

  push();             
  stroke(0);
  fill(200, 200, 200, 220);
  rect(x, y, w, h, 5);

  fill(0);
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  text("MENU", x + w / 2, y + h / 2);
  pop();                 
}
function botonSiguiente() {
  let x = width - 90;
  let y = height - 40;
  let w = 80;
  let h = 30;

  push();             
  stroke(0);
  fill(200, 200, 200, 220);
  rect(x, y, w, h, 5);

  fill(0);
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  text("SIGUIENTE", x + w / 2, y + h / 2);
  pop();                 
}
function zonaClic(x, y, w, h, nuevoEstado) {
  zonas.push({ x: x, y: y, w: w, h: h, nuevoEstado: nuevoEstado });
}

function mousePressed() {
  console.log("click:", mouseX, mouseY, "estado:", estado);
  for (let i = 0; i < zonas.length; i++) {
    let z = zonas[i];
    if (mouseX > z.x && mouseX < z.x + z.w && mouseY > z.y && mouseY < z.y + z.h) {
      estado = z.nuevoEstado;
      return; 
    }
  }
 
  if (estado == 0) {
    // Si se hace clic en "Comenzar"
    if (mouseX > 23 && mouseX < 200 && mouseY > 330 && mouseY < 370) {
      estado = 1;
      
      if (!musicAventuraActiva) {
        musicAventura.loop(); 
        musicAventuraActiva = true; 
      }
    }
  }
}
