var angleX=0;
var angleY=0;
var angleZ=0;

let txtr01;
let txtr02;
let txtr03;
let txtr04;
let txtr05;


function preload(){
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
    background(180);
    camera(0, 0, 0, 0, 0, 0, 0, 0, 0);
    ambientLight(255);
    pointLight(40,0,0, 0,450,900);
    pointLight(0,0,255, 1600,450,900);

    push();
        translate(0,0,-780);
        texture(txtr01);
        plane(3200, 1800);
    pop();

    push();
        translate(0,0,-435);
        texture(txtr02);
        noStroke();
        rotateX(angleZ);
        rotateY(angleZ);
        rotateZ(angleZ);

        box(1100,1100,34);
    pop();

    push();
        translate(0,0,94);
        texture(txtr03);
        noStroke();
        rotateX(-angleZ);
        rotateY(-angleZ);
        rotateZ(-angleZ);

        box(450,450,18);
    pop();

    push();
        translate(0,0,505);
        texture(txtr04);
        noStroke();
        rotateX(angleZ);
        rotateY(angleZ);
        rotateZ(angleZ);

        box(110,110,8);
    pop();

    push();
        translate(0,0,668);
        texture(txtr05);
        noStroke();
        rotateX(-angleZ);
        rotateY(-angleZ);
        rotateZ(-angleZ);

        box(19,19,4);
    pop();



         angleZ += 0.007;
         angleY += 0.010;
         angleZ += 0.015;

}
