
var x =0;
var y =0;
var x2 =0;
var y2= 0;
var x3=0;
var score=0;
var iteration=0;


function setup(){
    createCanvas(600,600);
    background('green');
    textSize(36);
    text("Welcome to Pong!",150,100);
    textSize(24);
    text("Use left and right arrow keys to move paddle", 60, 150);
    textSize(16);
    text('Score: ',450,50);
    

    
}

function draw(){
    setup();
    text(score,500,50);
    
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
        x2=-7;
    }
    if (y<=10){
    y2=5;
    
}
    else if (y>=550 && x>x3 && x<=x3+200){
        y2=-11;

        score++;
    }
    else if(y>=575){
        y2=0;
        x2=0;
        textSize(48);
        text("GAME OVER!",150,300);
        textSize(24);
        text("Double click your mouse to restart!", 110, 350);
        noLoop();

    }

    x+=x2+5;
    y+=y2+5;

    rect(x3,575,200,5);
    ellipse(x,y,50,50);
    
}
function doubleClicked(){
    clear();
    var x = 0;
    var y = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var score = 0;
    return false;
}
function restart(){
     doubleClicked();
     redraw();
}
