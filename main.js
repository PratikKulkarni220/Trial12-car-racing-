var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car_width="40";
var car_height="40";
 var background_image="race/ track/ image.jpg";
 var car_img="car image.png";
 var car_x="200";
 var car_y="200";

 function addPics(){
     background_imgTag= new Image();
     background_imgTag.onLoad = upload_background;
     background_imgTag.src=background_image;

     car_image= new Image();
     car_image.onLoad=upload_img;
     car_image.src=car_img;
 }

 function upload_background(){
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

 }
 function upload_img(){
     ctx.drawImage(car_img,car_x ,car_y,car_width, car_height);

 }
 window.addEventListener("keydown",mykeydown);
  function mykeydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed=="38")
{
    console.log("up");
    up()
}
  }
  if (keyPressed=="40")
  {
      console.log("down");
      down()
  }
    if (keyPressed=="37")
    {
        console.log("left");
        left()
    }
      if (keyPressed=="39")
{
    console.log("right");
}
  if (keyPressed=="18")
{
    console.log("car Image Changed");
    carImageChange()
}

  function carImageChange(){
car_img="car2.png"
  }
  function up(){
  if (car_y > 0){
    car_y= car_y + 5;
    console.log("up")
  }
}
  
  function down(){
    if (car_y <= 800){
      car_y= car_y - 5;
      console.log("down")
    }
    }
    function left(){
      if (car_x > 0){
        car_x= car_x + 5;
        console.log("left")
      }
      }
      function right(){
        if (car_y > 1000){
          car_y= car_y - 5;
          console.log("right")
        }
        }
      
    
  

 
  