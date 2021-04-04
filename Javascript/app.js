'use strict';

function paintOutput(){

let userName = prompt('What is your name?');
console.log(typeof userName);
let userExperience = prompt('How experienced are you using paints?');
console.log(typeof userExperience);
let chosenColor = prompt('What painting color would you like to have?');
console.log(typeof chosenColor);
let paintType = prompt('What type of painting would you like to have?', 'Interior, Exterior');
console.log(typeof paintType);
let printedOutput = "Your name is "+ userName + ", and as you said you are " + userExperience + ", and you have chosen " + chosenColor + ", as an " + paintType + " painting.";

alert(printedOutput);
}

paintOutput();

