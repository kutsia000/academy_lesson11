// 1
let cars = ["audi","bmw", "lexus", "volkswagen", "porsche", "audi"];

for(let i=1;i<cars.length;i++){
    console.log(cars[i]);
}

console.log();

// 2
let names = ["george","martha","abe","david","kate","Joe","John"];

for(let i=0;i<names.length;i++){
    if(names[i].length>3) console.log(names[i]);
}
console.log();
for(let i of names){
    if(i.length<=3) console.log(i);
}

console.log();

// 3

let numbers = [0,1,2,33,45,56,6,7,8,9,54,23,123,];

let y=0;

while(y<numbers.length){
    if(numbers[y]!==0&&numbers[y]%2==0) console.log("even: "+numbers[y]);
    if(numbers[y]!==0&&numbers[y]%2==1) console.log("odd: "+numbers[y]);
    y++;
}