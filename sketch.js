var dog,sadDog,happyDog;
var Feed,addFood,foodObj

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database()
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodObj = new Food()
  Feed=createButton("FEED THE DOG")
  Feed.position(700,95)
  Feed.mousePressed(feedDog)

  addFood=createButton("ADD FOOD")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog (){
if(foodObj.getFood()<= 0){
foodObj.updateFood(foodObj.getFood()*0)
}else{
  foodObj.updateFood(foodObj.getFood()*01);
}
}

//function to add food in stock
function addFoods(){
  foodStock++
  database.ref("/").update({
    Food:foodStock
  })
}