var x=300;
var y= 571;
var x2=x;
var x3=0;
var something = 5;


var a1 = {
    x:50,
    y:50,
    shown:0
}
var a2 = {
    x:150,
    y:50,
    shown:0
}
var a3 = {
    x:250,
    y:50,
    shown:0
}
var a4 = {
    x:350,
    y:50,
    shown:0
}
var a5= {
    x:450,
    y:50,
    shown:0
}
var a6= {
    x:550,
    y:50,
    shown:0
}

var aliens =[a1,a2,a3,a4,a5,a6];
for (var i=0;i<aliens.length;i++){
    var x=375;
    var y=675;
}
var bullets = [];


function setup(){
    createCanvas(600,600);
    background('black');
    
              
    
}
function draw(){
    setup();
   
    
    if(keyIsDown(LEFT_ARROW)){
        x-=2;
    }
     if(keyIsDown(RIGHT_ARROW)){
        x+=2;
    }
   for (var i=0;i<aliens.length;i++){
    fill('green');
    if(aliens[i].shown ===0){
        rect(aliens[i].x,aliens[i].y,25,25);
    //    if (x3>=570){
    //         x3-=20;
    //     }
    //     else if (x3<=10){
    //         x3+=20;
    // }
   } 
   }
   
    fill('red');
    rect(x,575,25,20);
    
    fill('red');
    rect(x+9,571,8,5);
    
    for (var i=0;i<bullets.length;i++){
        if(bullets[i][0]>=aliens[0].x && bullets[i][0]<=aliens[0].x+25 && bullets[i][1]<=aliens[0].y+25){
            aliens[0].shown=1;
            bullets.splice(i,1);
            something--;
        }
        else if(bullets[i][0]>=aliens[1].x && bullets[i][0]<=aliens[1].x+25 && bullets[i][1]<=aliens[1].y+25){
            aliens[1].shown=1;
            bullets.splice(i,1);
            something--;
        }
        else if(bullets[i][0]>=aliens[2].x && bullets[i][0]<=aliens[2].x+25 && bullets[i][1]<=aliens[2].y+25){
            aliens[2].shown=1;
            bullets.splice(i,1);
            something--;
        }
        else if(bullets[i][0]>=aliens[3].x && bullets[i][0]<=aliens[3].x+25 && bullets[i][1]<=aliens[3].y+25){
            aliens[3].shown=1;
            bullets.splice(i,1);
            something--;
        }
        else if(bullets[i][0]>=aliens[4].x && bullets[i][0]<=aliens[4].x+25 && bullets[i][1]<=aliens[4].y+25){
            aliens[4].shown=1;
            bullets.splice(i,1);
            something--;
        }
        else if(bullets[i][0]>=aliens[5].x && bullets[i][0]<=aliens[5].x+25 && bullets[i][1]<=aliens[5].y+25){
            aliens[5].shown=1;
            bullets.splice(i,1);
            something--;
        }
    }
    
    for(var c =0;c<bullets.length;c++){
        bullets[c][1]-=5;
        rect(bullets[c][0],bullets[c][1],5,5);
    }
   if (something<-5){
       text("You Win!",150,200);
        noLoop();
   }
    
}
function keyPressed() {
  if (keyCode === 32) {
      
    bullets.push([x+10,571]);
    
}
    
  
} 
