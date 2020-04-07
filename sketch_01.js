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
let targetX = 6.28318530718;
let targetY = 6.28318530718;
let targetZ = -6.28318530718;
let startX = 0;
let startY = 0;
let startZ = 0;
let x = 0;
let y = 0;
let z = 0;




function preload(){
    txtr01 = loadImage('img/ori/txtr01.jpg');
    txtr02 = loadImage('img/ori/txtr02.jpg');
    txtr03 = loadImage('img/ori/txtr03.jpg');
    txtr04 = loadImage('img/ori/txtr04.jpg');
    txtr05 = loadImage('img/ori/txtr05.jpg');

}

function setup() {
    createCanvas(1600, 900, WEBGL);
    frameRate(60);
}


function draw(){
    background(180);
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0);
    ambientLight(255);




    push();
        translate(0,0,-780);
        texture(txtr01);
        plane(3200, 1800);
    pop();

    push();
        translate(0,0,-435);
        texture(txtr02);
        noStroke();
        rotateX(x);
        rotateY(y);
        rotateZ(x);

        box(1100,1100,64);
    pop();

    push();
        translate(0,0,105);
        texture(txtr03);
        noStroke();
        rotateX(-y);
        rotateY(-x);
        rotateZ(-z);

        box(450,450,36);
    pop();

    push();
        translate(0,0,505);
        texture(txtr04);
        noStroke();
        rotateX(z);
        rotateY(x);
        rotateZ(y);

        box(110,110,16);
    pop();

    push();
        translate(0,0,668);
        texture(txtr05);
        noStroke();
        rotateX(-z);
        rotateY(-y);
        rotateZ(-x);

        box(19,19,8);
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
