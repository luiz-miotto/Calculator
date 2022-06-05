let displayValue = "";
var secondDisplayValue = "";
let numberArray = [0,1,2,3,4,5,6,7,8,9]
var inputDisplay = document.getElementById("inputDisplay");
var counter = 0;
var first;
var addedValue;
var plusCounter = 0;
var minusCounter = 0;
var divideCounter;
var multiplyCounter;
/*
var increment = function(){
    return function(counter){
        counter +=1;
        return counter;
    }
};
*/

/*
check this out
https://stackoverflow.com/questions/10286386/how-to-convert-string-equation-to-number-in-javascript#:~:text=use%20parseInt()%20%2CThe%20parseInt,string%20and%20returns%20an%20integer.&text=Show%20activity%20on%20this%20post.,-One%20Liner%3A%20str&text=Show%20activity%20on%20this%20post.,-I%20have%20a
https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript



number selector function{}
addition function{
    on click add display value
}



*/

function produceDisplayValue(keyValue){
    if (counter <= 0){
        displayValue = displayValue + keyValue;
        console.log(displayValue);
        inputDisplay.innerText = displayValue;
        console.log(`This is the value of ${counter}`)
        } else {
            secondDisplayValue = secondDisplayValue + keyValue;
            console.log(secondDisplayValue);
            inputDisplay.innerText = secondDisplayValue;   
            console.log(`This is the value of ${counter}`)
        }
}


var equal = document.getElementById("equals");
equal.addEventListener("click", () => {

    console.log("is equals working");
    console.log(secondDisplayValue);
    if (plusCounter = 1){
   addedValue = sum(displayValue,secondDisplayValue);
   inputDisplay.innerText = addedValue;
   --plusCounter;
    } else if (minusCounter = 1){
        subtractedValue = subtract(displayValue,secondDisplayValue);
        inputDisplay.innerText = subtractedValue;
        --minusCounter;
    }
});

var plus = document.getElementById("plus");
plus.addEventListener("click", () =>{
    inputDisplay.innerText = secondDisplayValue;
    ++counter;
    
    ++plusCounter;
    
    console.log(`This is the value of ${counter}`);
});


var plus = document.getElementById("minus");
plus.addEventListener("click", () =>{
    inputDisplay.innerText = secondDisplayValue;
    ++counter;
    ++minusCounter;
    console.log(`This is the value of ${counter}`);
});

var one = document.getElementById("1");
one.addEventListener("click", ()=>{
    let firstKeyValue = one.id.toString();
    produceDisplayValue(firstKeyValue);
});

var two = document.getElementById("2");
two.addEventListener("click", ()=>{
    let secondKeyValue = two.id.toString();
    produceDisplayValue(secondKeyValue);
});

var three = document.getElementById("3");
three.addEventListener("click", ()=>{
    let thirdKeyValue = three.id.toString();
    produceDisplayValue(thirdKeyValue);
}); 

var four = document.getElementById("4");
four.addEventListener("click", () =>{
    let fourthKeyValue = four.id.toString();
    produceDisplayValue(fourthKeyValue);
});

var five = document.getElementById("5");
five.addEventListener("click", () => {
    let fifthKeyValue = five.id.toString();
    produceDisplayValue(fifthKeyValue);
})


var six = document.getElementById("6");
six.addEventListener("click", () => {
    let sixthKeyValue = six.id.toString();
    produceDisplayValue(sixthKeyValue);
});

var seven = document.getElementById("7");
seven.addEventListener("click", () => {
    let seventhKeyValue = seven.id.toString();
    produceDisplayValue(seventhKeyValue);
});

var eight = document.getElementById("8");
eight.addEventListener("click", () => {
    let eighthKeyValue = eight.id.toString();
    produceDisplayValue(eighthKeyValue);
});

var nine = document.getElementById("9");
nine.addEventListener("click", () => {
    let ninthKeyValue = nine.id.toString();
    produceDisplayValue(ninthKeyValue);
});

var zero = document.getElementById("0");
zero.addEventListener("click", () => {
    let zerothKeyValue = zero.id.toString();
    produceDisplayValue(zerothKeyValue);
});

function sum(x,y){
    let z;
    
    return z = parseFloat(x) + parseFloat(y);
}

function subtract(x,y){
    let z;
    return z = parseFloat(x)-parseFloat(y);
}

function multiply(x,y){
    let z;
    return z = parseFloat(x)*parseFloat(y);
}

function divide(x,y){
    let z;
    return z = parseFloat(x)/parseFloat(y);
}


 var sumFunction = document.getElementById("plus");
 sumFunction.addEventListener("click", () =>{
 console.log("testing plus sign")
 });