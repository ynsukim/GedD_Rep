var angleX=0;
var angleY=0;
var angleZ=0;

let txtr01;
let txtr02;
let txtr03;
let txtr04;
let txtr05;

let easingX = 0.05;
let easingY = easingX;
let easingZ = easingX;
let targetX = 3.14;
let targetY = 3.14;
let targetZ = -3.14;
let startX = 0;
let startY = 0;
let startZ = 0;
let x = 0;
let y = 0;
let z = 0;




function preload(){
    txtr00 = loadImage('img/bgg.jpg');
    txtr01 = loadImage('img/txtr01.jpg');
    txtr02 = loadImage('img/txtr02.jpg');
    txtr03 = loadImage('img/txtr03.jpg');
    txtr04 = loadImage('img/txtr04.jpg');
    txtr05 = loadImage('img/txtr05.jpg');

}

function setup() {
    createCanvas(1600, 900, WEBGL);
    frameRate(60);
}


function draw(){
    background(0);
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0);
    ambientLight(255);
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    // directionalLight(255, 0, 0, -0.5, 0.5, 0.5);
    // directionalLight(0, 0, 255, 0.5, 0.5, 0.5);



    push();
        translate(0,0,-780);
        texture(txtr00);
        rotateY(-x);
        box(3200, 1800);

    pop();

    push();
        translate(0,0,-435);
        texture(txtr02);
        // ambientMaterial(255);
        noStroke();
        rotateX(x);
        // rotateY(y);
        // rotateZ(x);

        box(1100,1100,34);
    pop();

    push();
        translate(0,0,105);
        texture(txtr03);
        // ambientMaterial(255);
        noStroke();
        // rotateX(-y);
        rotateY(-x);
        // rotateZ(-z);

        box(450,450,18);
    pop();

    push();
        translate(0,0,505);
        texture(txtr04);
        // ambientMaterial(255);
        noStroke();
        rotateX(z);
        // rotateY(x);
        // rotateZ(y);

        box(110,110,8);
    pop();

    push();
        translate(0,0,668);
        texture(txtr05);
        // ambientMaterial(255);
        noStroke();
        // rotateX(-z);
        rotateY(-y);
        // rotateZ(-x);

        box(17.8,17.8,17.8);
    pop();

        if(mouseIsPressed){
        x = x + (targetX - x) * easingX;
        y = y + (targetY - y) * easingY;
        z = z + (targetZ - z) * easingZ;
      } else {
        x = x + (startX - x) * easingX;
        y = y + (startY - y) * easingY;
        z = z + (startZ - z) * easingZ;
      }

      // x += 0.007;
      // y += 0.010;
      // z += 0.015;

}
