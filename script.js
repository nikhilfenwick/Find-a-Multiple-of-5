// console.log("Hello World!");


// Write a function 

// 1. that takes two numbers
// 1. Then, get the result by multiplying the first number and the second number

// 1. Then, if the result number is a multiple of 5, return 1
// 1. else, return 2.

// 1. if return value from this function is 1, the output should be, "The output is a multiple of 5"
// 1. else, the output should be, "The output is NOT a multiple of 5"


function twoNumber(junior, senior){
    let functionDefintion = "The function takes two numbers and multiplies both numbers"
    console.log(functionDefintion);

    let x = junior * senior;

    if (x % 5 == 0){
        return 1;
    } else return 2;
}

let firstNumber = 19;
let secondNumber = 7;

// Take the two numbers from the input boxes, using the button. 

function takesInputBoxValue(){
    let dog = "This function takes the two numbers from the input boxes";
    // console.log(dog)

    firstNumber = document.getElementById("junior").value;
    secondNumber = document.getElementById("senior").value;
    
    
    let firstNumberConvertedToInt = parseInt(firstNumber);
    let secondNumberConvertedToInt = parseInt(secondNumber);
    console.log(firstNumber);
    console.log(secondNumber);
    let functionResult = twoNumber(firstNumberConvertedToInt, secondNumberConvertedToInt);
    console.log(functionResult);

    if (functionResult === 1){
        // Show the output. 
        // The output is a multiple of 5. 
        let multiple5Yes = "The output is a multiple of 5";
        let theEnding = document.getElementById("theEnding");
        theEnding.innerText = multiple5Yes;
    }   else{
        // The output is NOT a multiple of 5.
        let multiple5No = "The output is NOT a multiple of 5";
        let theEnding = document.getElementById("theEnding");
        theEnding.innerText = multiple5No;
    }

}

let resultFromFunction = twoNumber(firstNumber, secondNumber);



if (resultFromFunction === 1){
    let output = "The output is a multiple of 5";
    console.log(output);
}   else {
    let output2 = "The output is NOT a multiple of 5"; 
    console.log(output2);
}

console.log(resultFromFunction);