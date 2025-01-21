 
//what is higher order function
//---> function which take another function as input it is known as higher order function

//lets make calculator
// function add(num1,num2){
//     return num1+num2;
// }
// function mutiply(num1,num2){
//     return num1*num2;
// }
// function subtract(num1,num2){
//     return num1-num2
// }
// function divide(num1,num2){
//     return num1/num2
// }

// function calculate(num1,num2,operator){
//     return operator(num1,num2)
// }
// calculate(8,5,add);
// calculate(5,6,mutiply);
// calculate(13,9,subtract);
// calculate(50,7,divide);
// //so here calculate is higher order function











//for one button

//document.querySelector("button").addEventListener("click",handleClick());  when we do like  this even we didnt click the button still function get called

//do like this
// document.querySelector("button").addEventListener("click",handleClick); 
//or do like this
// document.querySelector("button").addEventListener("click",function(){
//     alert("got clicked")
// }); 

//------------------------------------------------------------------------------------------------------------

//for all buttons

var NumberOfDrums= document.querySelectorAll(".drum").length

for( i =0; i<NumberOfDrums; i++)

document.querySelectorAll("button")[i].addEventListener("click",function(){
    
var buttonInnerHTML = this.innerHTML
makeSound(buttonInnerHTML)

buttonAnimation(buttonInnerHTML)
})
//--------------------------------------------------------------------------------------------------
//here this --> is denoting to button

//  this.style.color="orange";



//detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
              tom1.play();
    
            break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                  tom2.play();
          break;    
    
          case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;
        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                  tom4.play();
          break; 
          case "j":
            var audio = new Audio("sounds/snare.mp3")
              audio.play();
      break; 
      case "k":
                var audio = new Audio("sounds/crash.mp3")
                  audio.play();
          break;    
          case "l":
                var audio = new Audio("sounds/kick-bass.mp3")
                  audio.play();
          break;            
        default:
            break;
    }
       
    }


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
    
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100)
}
