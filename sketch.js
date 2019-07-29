// Llamar Constantes
const Y_AXIS = 1;
let b1, b2, c1, c2;

function setup() {
createCanvas(windowWidth, 567) 

  // colores
  c1 = color(0, 102, 153);
  c2 = color(6,25,33);

  noLoop();
    
}

function draw() {
  //fondo
  background('#F4E6BD');
  // Cielo Noche
    setGradient(1100, 100, 288, 440, c1, c2, Y_AXIS);

    //Estrellitas
    strokeWeight(3);
    stroke(color(255));
        point(1200, 200);
        point(1300, 150);
        point(1150, 120);
        point(1150, 260);
        point(1350, 230);
        point(1300, 300);
        point(1360, 350);
        point(1280, 400);
        point(1370, 450);
        point(1320, 480);
    
    
    //Ventanas
    
    strokeWeight(3);   
    stroke(255,179,0);
    line(1320, 10, 1320, 600);
    line(900, 180, 1500, 180);

    //circulos clo
    
    colorMode(RGB);
  noStroke(255);
let from = color(255, 179, 0,165);
let to = color(255, 78, 0, 165);
colorMode(RGB); // Try changing to HSB.
let interA = lerpColor(from, to, 0.33);
let interB = lerpColor(from, to, 0.66);
fill(from);
ellipse(1205, 295, 110, 110)
fill(interA);
ellipse(1195, 348, 110, 110)
fill(interB);
ellipse(1185, 430, 190, 190)
fill(to);
ellipse(1125, 412, 225, 225)
    
//Lineas Clo
    

    //potito
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();
        arc(1185, 440, 210, 210, 40, 10.4)
    
    //Cola        
        strokeWeight(3);   
        stroke(6,25,33); 
        noFill();
        arc(1125, 412, 225, 225, HALF_PI, 4.5)
        arc(1125, 412, 225, 225, HALF_PI, 4.5)
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();
        arc(1110, 325, 45, 45, 4.7, HALF_PI)
    
        //patitas
    
        strokeWeight(2.5);   
        stroke(255);
        line(1110, 523, 1280, 523);
    
    //espalda
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();
        arc(1120, 313, 75, 75, 12.3, 13.7)        
    
    //Guata
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();   
        arc(1185, 420, 190, 190, 11.77, 13)
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();   
        arc(1243, 335, 30, 30, 11.8, 13.7)
    
    //Pata
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();
        bezier(1180, 410, 1190, 390, 1275, 365, 1255, 510);
    
    //orejas
    
        strokeWeight(2.5);   
        stroke(255); 
        noFill();
        strokeJoin(ROUND);
        beginShape();
        vertex(1160, 260);
        vertex(1200, 220);
        vertex(1200, 250);
        endShape();

        strokeWeight(2.5);   
        stroke(255); 
        noFill();
        strokeJoin(ROUND);
        beginShape();
        vertex(1215, 250);
        vertex(1245, 220);
        vertex(1245, 255);
        endShape();

    //Cara
    
        stroke(255); 
        noFill();
        bezier(1190, 284, 1200, 276, 1210, 276, 1218, 284);
    
        stroke(255); 
        noFill();
        bezier(1190, 284, 1200, 292, 1210, 292, 1218, 284);
    
        stroke(255); 
        noFill();
        line(1202, 292, 1202, 276);
    
        strokeWeight(3); 
        stroke(6,25,33); 
        noFill();
        bezier(1232, 284, 1238, 279, 1243, 280, 1255, 284);
    
        strokeWeight(2.5); 
        stroke(255); 
        noFill();
        triangle(1220, 295, 1225, 303, 1230, 295);
    
        stroke(255); 
        noFill();
        bezier(1210, 305, 1215, 309, 1220, 309, 1225, 303);
        bezier(1225, 303, 1230, 309, 1235, 309, 1240, 305);

    
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
    // Gradiente de arriba a abajo
  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } 

  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}