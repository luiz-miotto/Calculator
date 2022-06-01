let displayValue = "";
var secondDisplayValue = "";
let numberArray = [0,1,2,3,4,5,6,7,8,9]


var one = document.getElementById("1");
one.addEventListener("click", ()=>{
    displayValue = displayValue + "1";
    console.log(displayValue);
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