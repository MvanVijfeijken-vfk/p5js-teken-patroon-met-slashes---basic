let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(255);
  // kruis tekenen
  line(0, 0, 10, 10); //backward slash
  line(10, 0, 0, 10); //forward slash

  // probability algoritme:
  // "random" functie kiest willekeurig getal tussen 0 en 1
  if (random(1) < 0.5) {
    // teken backward slash
    line(x, y, x + 10, y + 10);
  } else {
    // teken forward slash
    line(x, y+10, x +  10, y);
  }
  // na ieder frame moet ie 10 pixels opschuiven
  x = x + 10;
  // en aan eind van 1e regel moet ie weer aan begin starten
  // totdat y totale hoogte heeft bereikt
  if (x > width & y < height) {
    x = 0;
    y = y + 10;
  }
}