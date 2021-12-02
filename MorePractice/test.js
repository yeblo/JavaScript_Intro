person = {
    name: "Per",
    age: "35",
    country: "Norway"
}


function logData(){
    let str = person.name + "is " + person.age + " years old and lives in " + person.country;
    console.log(str);
}

logData();


let age = Math.floor(Math.random() * 100) + 1;
console.log(age)
if(age < 6){
    console.log("free");
}
else if (age >= 6 && age < 17){
    console.log("child discount");
}
else if (age >= 18 && age < 26){
    console.log("student discount");
}
else if (age >= 27 && age < 66){
    console.log("full price");
}else{
    console.log("senior citizen discount");
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log("THe five largest countries in the world")
for(let i = 0; i < largeCountries.length; i++){
    console.log("- " + largeCountries[i]);
}

//let largeCountries = ["Tvalu","India","USA","Indonesia","Nigeria"]

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");