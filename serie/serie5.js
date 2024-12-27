////Exercice 1 :
let str = "my-short-string";
let str1 = str.split('-').join('');
console.log(str1);
////Exercice 2 :
let arr = [5, 3, 8, 1];
function filter(arr, a,b){
    return arr.filter((x) => x > a && x < b);
}
console.log(filter(arr, 1, 8));
////Exercice 3 :
let array =  ["This is a JavaScript project"];
let sort = array.map((x) => x.split(' ').sort((a,b) => a.length - b.length).join(' '));
console.log(sort);
////Exercice 4 :
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map((x) => x.name);
console.log(names);
////Exercice 5 :
let mohamed = { name: "mohamed", age: 18 };
let rim = { name: "rim", age: 30 };
let dan = { name: "dan", age: 28 };
let user = [ mohamed, rim, dan ];
let age = user.sort((a,b) => a.age - b.age);
console.log(age);
////Exercice 6 :
let mouad = { name: "mouad", age: 18 };
let rima = { name: "rima", age: 30 };
let dani = { name: "dani", age: 28 };
let use = [ mohamed, rim, dan ];
let avr = use.reduce((a,b) => a + b.age, 0) / use.length;
console.log(avr);
////Exercice 7 :
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
               "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings)); 
////Exercice 8 :
function groupById(arr) {
    return arr.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

let userss = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(userss);

console.log(usersById);
