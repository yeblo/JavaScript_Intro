// The main difference between let and const is that const cannot be reassigned


let myLeads = [];



const inputel = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");


//  localStorage.clear();
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// localStorage.setItem("names","yeblo");
// let names = localStorage.getItem("name");

// console.log(names);



if(leadsfromLocalStorage){
    myLeads = leadsfromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked from addeventlistener ")
    myLeads.push(inputel.value);
    render(myLeads);
    inputel.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(myLeads);
})

deleteBtn.addEventListener("dblclick",function(){
    console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

saveBtn.addEventListener("click", function(){

})


function render(leads){
  let listItems = "";
for(let i = 0; i < leads.length; i++){
    // const li = document.createElement("li");
    // li.textContent = myLeads[i]
    // ulEl.append(li);
    listItems += 
    `<li>
          <a href= ${leads[i]} target = '_Blank'>  ${leads[i]}</a>
    </li>
    `;
   
}

ulEl.innerHTML = listItems;
//console.log(ulEl.innerHTML);  
}

// const recipient = "James ";

// const email =  `Hello ${recipient}`;

// console.log(email);