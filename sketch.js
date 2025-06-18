 // Projeto p5.js: Campo e Cidade estilo brinquedo com pôr do sol e lua realistas
// Alternância entre cidade (Paris estilizada) e campo (com tratores, animais e casas brinquedo)

let modo = "campo";
let dia = true;
let tratorX = 0;
let trator2X = -200;
let carroX = 0;
let carro2X = -300;
let cachorroX = 0;
let solY = 120;
let solCor;

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  solCor = color(255, 160, 0);
}

function draw() {
  desenharCeu();

  if (modo === "campo") {
    desenharCampo();
    desenharPorDoSol();
    desenharTrator(tratorX, height - 100);
    desenharTrator(trator2X, height - 120);
    desenharAnimaisBrinquedo();
    desenharCasasCampo();
    tratorX += 1;
    trator2X += 0.7;
    if (tratorX > width + 60) tratorX = -60;
    if (trator2X > width + 60) trator2X = -100;
  } else {
    desenharCidadeParis();
    desenharCarro(carroX, height - 80);
    desenharCarro(carro2X, height - 120);
    desenharRuaParaCachorros();
    desenharCachorroBrinquedo(cachorroX, height - 140);
    carroX += 2;
    carro2X += 1.5;
    cachorroX += 1;
    if (carroX > width + 60) carroX = -60;
    if (carro2X > width + 60) carro2X = -300;
    if (cachorroX > width + 30) cachorroX = -30;
  }

  desenharSolOuLua();
  desenharBotaoModoDiaNoite();
}

function desenharCeu() {
  if (dia) {
    let grad = drawingContext.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, '#FFDAB9');
    grad.addColorStop(1, '#87CEEB');
    drawingContext.fillStyle = grad;
    rect(0, 0, width, height);
  } else {
    background(25, 25, 112);
    for (let i = 0; i < 100; i++) {
      fill(255);
      ellipse(random(width), random(height / 2), 2, 2);
    }
  }
}

function desenharPorDoSol() {
  if (dia) {
    noStroke();
    for (let r = 200; r > 0; r -= 5) {
      fill(lerpColor(color(255, 102, 0), color(255, 204, 102), r / 200));
      ellipse(width - 120, solY, r * 2);
    }
  }
}

function desenharCampo() {
  fill(50, 180, 70);
  rect(0, height / 2, width, height / 2);
  for (let i = 50; i < width; i += 100) {
    drawFlor(i, height - 50);
  }
}

function desenharCasasCampo() {
  for (let i = 50; i < width; i += 200) {
    fill(255);
    rect(i, height / 2 - 60, 60, 60);
    fill(200, 0, 0);
    triangle(i - 10, height / 2 - 60, i + 30, height / 2 - 100, i + 70, height / 2 - 60);
    fill(0);
    rect(i + 20, height / 2 - 30, 20, 30);
  }
}

function desenharAnimaisBrinquedo() {
  // Vaca
  fill(255);
  rect(100, height - 80, 40, 20, 5);
  fill(0);
  ellipse(110, height - 60, 5);
  ellipse(130, height - 60, 5);

  // Cavalo
  fill(139, 69, 19);
  rect(200, height - 85, 40, 20, 5);
  ellipse(220, height - 85, 10);
  ellipse(200, height - 85, 10);
}

function desenharTrator(x, y) {
  fill(255, 0, 0);
  rect(x, y - 20, 60, 20, 5);
  fill(0, 0, 255);
  rect(x + 10, y - 40, 30, 20, 3);
  fill(50);
  ellipse(x + 15, y, 20, 20);
  ellipse(x + 50, y, 28, 28);
  fill(0);
  ellipse(x + 50, y, 10);
}

function desenharCidadeParis() {
  fill(180);
  rect(0, height / 2, width, height / 2);

  for (let i = 40; i < width; i += 120) {
    fill(80);
    rect(i, height / 2 - 180, 80, 180);
    fill(255, 255, 150);
    for (let y = height / 2 - 160; y < height - 20; y += 30) {
      for (let x = i + 10; x < i + 70; x += 25) {
        rect(x, y, 15, 20);
      }
    }
  }

  // Torre Eiffel estilizada
  stroke(100);
  strokeWeight(3);
  line(700, height / 2, 720, height / 2 - 100);
  line(740, height / 2, 720, height / 2 - 100);
  line(700, height / 2, 740, height / 2);
  noStroke();
}

function desenharRuaParaCachorros() {
  fill(60);
  rect(0, height - 150, width, 50);
}

function desenharCachorroBrinquedo(x, y) {
  fill(139, 69, 19);
  ellipse(x, y, 30, 20);
  ellipse(x + 15, y - 10, 10, 10);
  fill(0);
  ellipse(x - 10, y, 5);
  ellipse(x + 10, y, 5);
}

function desenharCarro(x, y) {
  fill(255, 100, 100);
  rect(x, y, 60, 25, 5);
  fill(0);
  ellipse(x + 10, y + 25, 15);
  ellipse(x + 50, y + 25, 15);
  fill(255);
  rect(x + 15, y - 10, 30, 15, 3);
}

function desenharSolOuLua() {
  noStroke();
  if (dia) {
    fill(255, 204, 0);
    ellipse(width - 100, 100, 80, 80);
  } else {
    fill(240);
    ellipse(100, 100, 70, 70);
  }
}

function desenharBotaoModoDiaNoite() {
  fill(255);
  rect(10, 10, 160, 30);
  fill(0);
  textSize(14);
  textAlign(LEFT, CENTER);
  text(dia ? "☀️ Alternar para Noite" : "🌙 Alternar para Dia", 15, 25);
}

function drawFlor(x, y) {
  fill(255, 0, 0);
  ellipse(x - 5, y - 5, 10);
  ellipse(x + 5, y - 5, 10);
  ellipse(x - 5, y + 5, 10);
  ellipse(x + 5, y + 5, 10);
  fill(255, 255, 0);
  ellipse(x, y, 10);
}

function mousePressed() {
  if (mouseX > 10 && mouseX < 170 && mouseY > 10 && mouseY < 40) {
    dia = !dia;
  } else {
    modo = modo === "campo" ? "cidade" : "campo";
  }
}
