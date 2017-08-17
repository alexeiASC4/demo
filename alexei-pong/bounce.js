
var x =0;
var y =0;
var x2 =0;
var y2= 0;
var x3=0;
var score=0;


function setup(){
    createCanvas(600,600);
    background('green');
    textSize(16);
    text("Welcome to Pong!",200,100);
    text('Score: ',80,100);
    

    
}

function draw(){
    setup();
    text(score,140,100);
    
    if(keyIsDown(LEFT_ARROW)){
        x3-=10;
    }
     if(keyIsDown(RIGHT_ARROW)){
        x3+=10;
    }
    
    if (x<=10){
    x2=2;
    
}
    else if (x>=599){
        x2=-2;
    }
    if (y<=10){
    y2=5;
    
}
    else if (y>=550 && x>x3 && x<=x3+200){
        y2=-4;
        score++;
    }
    else if(y>=575){
        y2=0;
        x2=0;
        textSize(32);
        text("GAME OVER!",150,200);
        noLoop();

    }

    x+=x2;
    y+=y2;

    rect(x3,575,200,5);
    ellipse(x,y,50,50);
}
