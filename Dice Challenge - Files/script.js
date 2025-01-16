 
 //Math.random() --->generate number 0 to 9.99999999.........
 //Math.random()*6 --->generate number from 0 to 5.99999
 //Math.floor(Math.random()*6) --> convert it in nearest whole number i.e 0 to 5
 // //Math.floor(Math.random()*6)+1  --> convert it in nearest whole number i.e 1 to 6
var randomNum1 =Math.floor(Math.random()*6)+1;//1-6

var randomDiceImage = "dice"+randomNum1+".png";//dice1.png - dice6.png

var randomImageSource = "images/"+randomDiceImage;//images/dice1.png - images/dice6.png


var image1=document.querySelectorAll("img")[0];
var d1=image1.setAttribute("src",randomImageSource);

//-----------------------------------------------------------------------------------------------------------

var randomNum2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 ="images/dice"+randomNum2+".png";

var image2 = document.querySelectorAll("img")[1];
 var d2 = image2.setAttribute("src",randomImageSource2)

 if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 wins! 🚩"
 }else if(randomNum1===randomNum2){
    document.querySelector("h1").innerHTML="Draw !!";
 }else{
    document.querySelector("h1").innerHTML="Player 2 wins!🚩"
 }