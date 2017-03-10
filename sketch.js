var x =0;
var speed = 200;

function setup(){
    createCanvas(600,400);
    // background(150,150,150)
}

function draw(){
    background(17, 30, 221);
   
    if(mouseIsPressed){
      background(221, 17, 17);    
    }
    
    stroke(255);
    strokeWeight(6);
    noFill();
    
    if(mouseY<150){
        fill(82, 17, 135);
        
    }
    else{
        noFill();
    }
    
    ellipse(x,200,100,100);

    
    if(x>width  || x<0){
        
        console.log("Circle is off the screen");
        speed = speed * -1;
    }
    x = x + speed;
    
    console.log(x);
  
}