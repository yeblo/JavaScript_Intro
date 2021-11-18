let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let prev = document.getElementById("prev")
let count = 0;
countEl.innerText = count;

function increment(){
    count +=1;
    countEl.textContent = count;
}

function save(){
    let store = count + " - ";
    prev.textContent += store;
    console.log(count);
    count = 0;
    countEl.innerText = count;
}


