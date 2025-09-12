//https://youtu.be/Nyohes0U5Nw
let img1;
let zoomCirculos = 1;
let asd;
let ddd;
let sss;
let color1;
let color2;

function preload() {
  img1 = loadImage("img1.png");
}

function reiniciar() {
  asd = 50;
  ddd = 10;
  sss = 10;
  color1 = color(255);
  color2 = color(0);
  zoomCirculos = 1;
}

function setup() {
  createCanvas(800, 400);
  reiniciar();
  let c = createCanvas(800, 400);
  c.elt.oncontextmenu = () => false;
}
function calcularTamaño(base) {
  return base * 2;
}

function estaDentroCirculo(px, py, cx, cy, radio) {
  return dist(px, py, cx, cy) <= radio;
}

function dibujarLinea(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
}
function draw() {
  background(color1);
  console.log(mouseX + " / " + mouseY);
  noStroke();
  push();
  translate(400, 0);

  fill(color2);
  for (let y = 10; y < 400; y += 80) {
    for (let x = 10; x < 400; x += 80) {
      rect(x - 10, y - 10, 40, 40);
    }
  }
  for (let y = asd; y < 400; y += 80) {
    for (let x = asd; x < 400; x += 80) {
      rect(x - 10, y - 10, 40, 40);
    }
  }

  fill(color1);
  for (let y = 10; y < 200; y += 40) {
    for (let x = 10; x < 200; x += 40) {
      ellipse(x * 2, y * 2, ddd * 2, ddd * 2);
    }
  }
  for (let y = 30; y < 200; y += 40) {
    for (let x = 30; x < 200; x += 40) {
      ellipse(x * 2, y * 2, ddd * 2, ddd * 2);
    }
  }
  //Separacion guia +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  for (let y = 10; y < 200; y += 40) {
    for (let x = 30; x < 200; x += 40) {
      let tam = calcularTamaño(sss * zoomCirculos);
      let cx = x * 2;
      let cy = y * 2;
      let mx = mouseX - 400;
      let my = mouseY;

      if (mouseX >= 600 && mouseX <= 800) {
        fill(random(255), random(255), random(255));
      } else {
        fill(color2);
      }
      if (estaDentroCirculo(mx, my, cx, cy, tam/2)) {
        stroke(255, 0, 0);
        strokeWeight(3);
      } else {
        noStroke();
      }
      ellipse(cx, cy, tam, tam);
    }
  }

  for (let y = 30; y < 200; y += 40) {
    for (let x = 10; x < 200; x += 40) {
      let tam = calcularTamaño(sss * zoomCirculos);
      let cx = x * 2;
      let cy = y * 2;
      let mx = mouseX - 400;
      let my = mouseY;
      if (mouseX >= 400 && mouseX < 600) {
        fill(random(255), random(255), random(255));
      } else {
        fill(color2);
      }
      if (estaDentroCirculo(mx, my, cx, cy, tam/2)) {
        stroke(255, 0, 0);
        strokeWeight(3);
      } else {
        noStroke();
      }
      ellipse(cx, cy, tam, tam);
    }
  }

  stroke(0);
  let grosor = map(mouseY, 0, height, 1, 5);
  strokeWeight(grosor);
  for (let x = 0; x <= 400; x += 40) {
    dibujarLinea(x, 0, x, 400);
  }
  for (let y = 0; y <= 400; y += 40) {
    dibujarLinea(0, y, 400, y);
  }
  if (mouseX > width/2 && mouseX < width) {
    sss = mouseY / 20;
    ddd = mouseX / 40;
  }
  pop();
  image(img1, 0, 0, 400, 400);
}

function keyPressed() {
  if (key == ' ') {
    reiniciar();
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
  } else if (mouseButton == RIGHT) {
    zoomCirculos += 0.5;
    if (zoomCirculos > 1.5) zoomCirculos = 1;
  }
}
