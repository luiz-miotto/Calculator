let displayValue = "";
var secondDisplayValue = "";
let numberArray = [0,1,2,3,4,5,6,7,8,9]
var inputDisplay = document.getElementById("inputDisplay");

var one = document.getElementById("1");
one.addEventListener("click", ()=>{
    displayValue = displayValue + "1";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var two = document.getElementById("2");
two.addEventListener("click", ()=>{
    displayValue = displayValue + "2";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var three = document.getElementById("3");
three.addEventListener("click", ()=>{
    displayValue = displayValue + "3";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
}); 

var four = document.getElementById("4");
four.addEventListener("click", () =>{
    displayValue = displayValue + "4";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var five = document.getElementById("5");
five.addEventListener("click", () => {
    displayValue = displayValue + "5";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
})


var six = document.getElementById("6");
six.addEventListener("click", () => {
    displayValue = displayValue + "6";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var seven = document.getElementById("7");
seven.addEventListener("click", () => {
    displayValue = displayValue + "7";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var eight = document.getElementById("8");
eight.addEventListener("click", () => {
    displayValue = displayValue + "8";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var nine = document.getElementById("9");
nine.addEventListener("click", () => {
    displayValue = displayValue + "9";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

var zero = document.getElementById("0");
zero.addEventListener("click", () => {
    displayValue = displayValue + "0";
    console.log(displayValue);
    inputDisplay.innerText = displayValue;
});

function sum(x,y){
    let z;
    return z = x+y;
}

function subtract(x,y){
    let z;
    return z = x-y;
}

function multiply(x,y){
    let z;
    return z = x*y;
}

function divide(x,y){
    let z;
    return z = x/y;
}


 var sumFunction = document.getElementById("plus");
 sumFunction.addEventListener("click", () =>{
 console.log("testing plus sign")
 });