const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getbackground();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
    var responseJSON = await response.json() 
    var hour = datetime.slice(11, 13)
    if(hour=05,06){
    bg = "sunrise1.png"
    }
    if(hour=07,08){
        bg = "sunrise2.png"
        }
     if(hour=09,10){
        bg = "sunrise3.png"
         }
     if(hour=11){
         bg = "sunrise4.png"
          }
    if(hour=,12,13,14){
        bg = "sunrise5.png"
         }
    
    if(hour=15,16){
        bg = "sunrise6.png"
         }
    if(hour=17,18){
        bg = "sunrise7.png"
         }
    if(hour=19,20){
        bg = "sunrise8.png"
         }
if(hour=21,22){
     bg = "sunrise9.png"
      }
      
      if(hour=23){
        bg = "sunrise10.png"
         }
         if(hour=24,01,02){
            bg = "sunrise11.png"
             }
             if(hour=03,04){
                bg = "sunris12.png"
                 }
         




    backgroundImg = loadImg(bg)

}
