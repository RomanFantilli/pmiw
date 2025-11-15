//https://youtu.be/W4E-T1Q9Dto
let cursorEspada;
let pantallaInicio, imgIntro;
let font;
let estado = 0;

let pantallas = []; 

let zonas = [];

let musicAventura;
let musicAventuraActiva = false;

let funcionesPantalla = [
  menu,         
  introScreen,  
  screen1,      
  screen2,      
  screen3,      
  screen4,      
  screen5,      
  screen6,      
  screen7,      
  screen8,      
  screen9,      
  screen10,     
  screen11,     
  screen12,     
  screen13,     
  screen14,     
  screen15,     
  screen16,     
  screen17,     
  screen18,     
  screen19      
];


function preload() {
  musicAventura = loadSound("assets/audio/cancion.mp3");

 
  pantallaInicio = loadImage('assets/pantallas.hda/pantallaInicio.jpg');
  imgIntro = loadImage('assets/pantallas.hda/intro.jpg');

  pantallas[0] = null; 
  for (let i = 1; i <= 19; i++) {
    let ruta = 'assets/pantallas.hda/pantalla' + i + '.jpg';
    pantallas[i] = loadImage(ruta);
  }
 

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
  console.log("¿Pantalla 1 cargada?", !!pantallas[1]);
}

function draw() {  
  zonas = [];

  if (estado >= 0 && estado < funcionesPantalla.length) {
    funcionesPantalla[estado](); 
  } else {
    
    background(255, 0, 0);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Error: Estado no válido: " + estado, width / 2, height / 2);
  }
}



function menu() {
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
  background("#6C3411");
  if (pantallas[1]) image(pantallas[1], 0, 0); 
  noStroke();
  fill(255, 255, 255, 220);
  rect(40, 365, 500, 100, 20);
  triangle(161, 347, 173, 366, 150, 365);
  fill(0);
  textSize(28);
  text("Hermano, afuera siempre pasa algo raro.", 74, 404);
  text("¿A dónde querés ir esta vez?", 74, 434);
  fill(255, 255, 255, 220);
  rect(20, 35, 350, 130, 20);
  triangle(389, 135, 367, 120, 367, 140);
  fill(0);
  text("¡Jake! Estoy aburridísimo.", 40, 80);
  text("¡Necesito pelear contra algo,", 40, 110);
  text(" encontrar tesoros, lo que sea!", 40, 140);
  // ...
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 3);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function screen2() {
  background("#61d8ff");
  if (pantallas[2]) image(pantallas[2], 0, 125); 
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
  background("#61d8ff");
  if (pantallas[9]) image(pantallas[9], 0, 70); 
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
  background("#0FA5A1");
  if (pantallas[7]) image(pantallas[7], 0, 60); 
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

function screen5() {
  background("#212121");
  if (pantallas[3]) image(pantallas[3], 0, 45); 
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
  background("#010071");
  if (pantallas[4]) image(pantallas[4], 0, 60); 
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
  background("#010071");
  if (pantallas[6]) image(pantallas[6], 0, 60); 
  noStroke();
  fill(255, 255, 255, 220);
  rect(400, 110, 230, 80, 20);
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
  background("#61d8ff");
  if (pantallas[12]) image(pantallas[12], 0, 65); 
  noStroke();
  fill(255, 255, 255, 220);
  rect(400, 110, 230, 80, 20);
  triangle(424, 188, 408, 185, 405, 206);
  fill(0);
  textSize(20);
  text("¡Mira, Jake! Un mapa con un", 412, 138);
  text("dibujo extraño… dice La Ciu", 412, 160);
  text("dad de los Episodios Perdidos.", 412, 180);
  // ...
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 10);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function screen9() {
  background("#61d8ff");
  if (pantallas[13]) image(pantallas[13], 0, 120); 
  noStroke();
  fill(255, 255, 255, 220);
  rect(275, 150, 290, 120, 20);
  triangle(334, 268, 295, 266, 293, 286);
  fill(0);
  textSize(22);
  text("Uff… eso suena peligroso.", 285, 175);
  text("¿Seguro que querés meterte en eso?", 285, 200);
  text("Tengo una mejor idea: BMO ", 285, 230);
  text("y sandwiches.", 285, 250);
  // ...
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 11);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function screen10() {
  background("#61d8ff");
  if (pantallas[14]) image(pantallas[14], 0, 125); 
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

function screen11() {
  background("#18168B");
  if (pantallas[8]) image(pantallas[8], 0, 65); 
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
  background("#61d8ff");
  if (pantallas[15]) image(pantallas[15], 0, 120); 
  noStroke();
  fill(255, 255, 255, 220);
  rect(350, 110, 230, 70, 20);
  triangle(410, 177, 435, 177, 433, 202);
  textSize(25);
  fill(0);
  text("¡Vamos, Jake!", 400, 155);
  fill(255, 255, 255, 220);
  rect(90, 200, 230, 70, 20);
  triangle(178, 267, 162, 266, 152, 282);
  textSize(23);
  fill(0);
  text("Está bien, pero si me gana", 97, 232);
  text("la flojera no me hare cargo.", 95, 255);
  // ...
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function screen13() {
  background("#61d8ff");
  if (pantallas[16]) image(pantallas[16], 0, 60); 
  noStroke();
  fill(255, 255, 255, 220);
  rect(300, 102, 245, 70, 20);
  rect(403, 241, 230, 50, 20);
  rect(195, 298, 200, 70, 20);
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
  // ...
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 20);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function screen14() {
  background("#61d8ff");
  if (pantallas[17]) image(pantallas[17], 0, 60); 
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
  background("#61d8ff");
  if (pantallas[11]) image(pantallas[11], 0, 60); 
  fill("#dcbf96");
  stroke(3);
  rect(0, 10, 550, 70);
  textSize(28);
  noStroke();
  fill(0);
  text("al abrir la puerta se encuentran con algo inesperado", 15, 43);
  text("un show del Rey Helado", 15, 63);
  fill(255, 255, 255, 220);

  rect(90, 285, 350, 45, 20);
  triangle(163, 326, 145, 326, 149, 344);
  textSize(23);
  fill(0);
  text("Oh no… esto huele a… música rara.", 100, 315);
  // ...
  botonSiguiente();
  zonaClic(548, 440, 85, 30, 17);
  if (cursorEspada) image(cursorEspada, mouseX, mouseY, 32, 32);
}

function screen16() {
  background("#61d8ff");
  if (pantallas[11]) image(pantallas[11], 0, 60); 
  fill(255, 255, 255, 220);

  rect(145, 285, 300, 80, 20);
  rect(370, 84, 265, 70, 20);
  triangle(437, 353, 441, 340, 464, 358);
  triangle(389, 150, 374, 143, 359, 157);
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
  background("#61d8ff");
  if (pantallas[18]) image(pantallas[18], 0, 60); 
  fill(255, 255, 255, 220);

  rect(200, 285, 230, 40, 20);
  rect(370, 84, 265, 95, 20);
  triangle(416, 314, 421, 296, 439, 307);
  triangle(389, 150, 374, 143, 359, 157);
  triangle(167, 288, 144, 289, 144, 307);
  textSize(23);
  fill(0);
  text("¡Al fin un público propio!", 377, 115);
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
  background("#61d8ff");
  if (pantallas[19]) image(pantallas[19], 0, 60); 
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
  background("#61d8ff");
  if (pantallas[16]) image(pantallas[16], 0, 60); 
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
 
  zonas.push([x, y, w, h, nuevoEstado]); 
}

function mousePressed() {
  console.log("click:", mouseX, mouseY, "estado:", estado);
  

  for (let i = 0; i < zonas.length; i++) {
    let z = zonas[i]; 
    
    let zx = z[0];
    let zy = z[1];
    let zw = z[2];
    let zh = z[3];
    let zEstado = z[4];

    
    if (mouseX > zx && mouseX < zx + zw && mouseY > zy && mouseY < zy + zh) {
      estado = zEstado;
      return; 
    }
  }
 

  if (estado == 0) {
    
    if (mouseX > 23 && mouseX < 200 && mouseY > 330 && mouseY < 370) {
      estado = 1;

      if (!musicAventuraActiva) {
        musicAventura.loop();
        musicAventuraActiva = true;
      }
    }
  }
}
