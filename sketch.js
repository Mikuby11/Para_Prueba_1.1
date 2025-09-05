var x = 0; //variables//
var y = 0; 
var canvas; 
//otro tipo de variable con let (una variable para un contexto determinado)// 
  //y const / = es igual a : / == eso es igual a igual a = y tmb esta ==!//

function setup() { //las funciones tienen nombres por ej setup o draw//
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo"); //esto hace que cambie el cuerpo, parent hace que cambie de "caja" entonces este canva siempre va a ir a cuerpo//
  canvas.position(0,0); //ahora cambia segun la posicion, es decir las coordenadas 0,0//
  canvas.style('z-index','-1'); //funciona como la capa por asi decirlo, pq cambia el eje z, por eso esta detras de lo que trabajamos anteriormente//
  noStroke();
  frameRate (12);
}

function draw() { //funciona como un loop ya que se condiciona lo que hablabamos en la funcion setup//
  colorMode(HSB, 360, 60, 70) //modo de color a HSB (Tono, Saturación, Brillo) Rango: tono 0–360, saturación 0–100, brillo 0–100. Esto hace que los valores de map() de antes tengan sentido.//
  background(map(mouseX, 0, windowWidth, 0, 359), 100, map(mouseY, 0, windowHeight, 0, 100));
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("red");
  textSize( random(60,150));
  text("🦝🍂🎃",x,y);
}

//if(a === 300){ Aquí se está modificando a, que luego se usa como tamaño de texto.
 // a = a - 1; Si a llega exactamente a 300 → lo reduce en 1.
//} else {
//  a = a + 1;En cualquier otro caso → lo aumenta en 1.
//} En la práctica: el valor de a crece sin parar, pero cuando llega a 300 empieza a bajar solo por un ciclo, y luego sigue subiendo otra vez.
//para que funcione...
//textSize(a);
//text("🦖", x, y);

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}