let num1 =5;
let num2 = 2;

let ans = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add(){
    let add = num1 + num2;
    ans.textContent = "Sum is " + add;
}

function subtract(){
    let sub = num1 - num2;
    ans.textContent = "Subtraction is "+ sub;
}

function divide(){
    let divi = num1 / num2;
    ans.textContent =  "Division is "+ divi;
}

function multiply(){
    let mult = num1 * num2;
    ans.textContent =  "Multiplication is "+ mult;
}