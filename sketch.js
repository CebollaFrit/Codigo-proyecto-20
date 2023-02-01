var sonic, enemy;
var sonic_run, sonic_jump, sonic_ded;
var floor, invisible_floor,floor_IMG;
var enemy_image;
var gameState = "play";



function preload(){
    //sonic_run = loadAnimation("SonicRun1.png","SonicRun2.png","SonicRun3.png","SonicRun4.png","SonicRun5.png","SonicRun6.png","SonicRun7.png","SonicRun8.png");

    //floor_IMG = loadImage("Flat_ground.png");

    //sonic_jump = loadAnimation("sonic_spin1.png","sonic_spin2.png","sonic_spin3.png","sonic_spin4")

}

function setup() {
    sonic = createSprite(200,200,200,200);
    //sonic.scale = 0.5;
    //sonic.addAnimation("run",sonic_run);

    invisible_floor = createSprite(180,320);
    //invisible_floor.visibility = false;

    floor = createSprite(180,320);
    //floor.addImage("floor",floor_IMG);
 }

function draw() {

    sonic.velocityY = sonic.velocityY + 0.9;

    if (gameState==="play"){
        console.log("hola")

        //sonic.collide(invisible_floor);

        //if(keyDown("up")){


            //sonic.velocityY = -5
        //}
        
         
       

    }



    drawSprites();
 
}