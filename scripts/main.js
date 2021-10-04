// 1
let cars = ["audi","bmw", "lexus", "volkswagen", "porsche", "audi"];

function getCars() {
    for(let i=1;i<cars.length;i++){
        console.log(cars[i]);
    }
}

getCars();

console.log();

// 2
let names = ["george","martha","abe","david","kate","Joe","John"];

let getNames = function () {
    for(let i=0;i<names.length;i++){
        if(names[i].length>3) console.log(names[i]);
    }
    console.log();
    for(let i of names){
        if(i.length<=3) console.log(i);
    }
}

getNames();

console.log();

// 3

let numbers = [0,1,2,33,45,56,6,7,8,9,54,23,123,];

let y=0;

while(y<numbers.length){
    if(numbers[y]!==0&&numbers[y]%2==0) console.log("even: "+numbers[y]);
    if(numbers[y]!==0&&numbers[y]%2==1) console.log("odd: "+numbers[y]);
    y++;
}

console.log();

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);

console.log();

let data = ["sandro","ana","beqa","nino","nika","salome","lasha"];

let getData=()=>{
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
    }
    console.log();
    for(let c of data){
        console.log(c);
    }
    console.log();
    let c = 0;
    while(c<data.length){
        console.log(data[c]);
        c++;
    }
    console.log();
    data.forEach(element => {
        console.log(element);
    });
}

getData();

if(data.length===5&&data[data.length-1]==="nika") console.log("masivis raodenoba: 5 da bolo elementia nika");

if(data.length===7||data[0]==="sandro") console.log(`მასივის რაოდენობა: ${data.length} და პირველი ელემენტია ${data[0]}`);