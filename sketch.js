var rodolfo

function setup() {
  createCanvas(400,400);
rodolfo = createSprite(200,200,30,30)


}

function draw() 
{

  if (keyDown("s")) {
    rodolfo.y = rodolfo.y + 5
   
   }   
   if (keyDown("w")) {
    rodolfo.y = rodolfo.y - 5
   
   }   
  if (keyDown("a")) {
    rodolfo.x = rodolfo.x - 5
   
   }   
   if (keyDown("d")) {
    rodolfo.x = rodolfo.x + 5
   
   }   
  background(30);

  drawSprites()

}




