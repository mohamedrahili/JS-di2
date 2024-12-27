//exercice 1
let largeur = 20;
let longeur = 10;
let surface = longeur * largeur;
console.log(`La surface de ce rectangle est ${surface}`);
//exercice 2
let euro = 2000;
let taux = euro * 1.09;
console.log(`${euro} euros est égal à ${taux} en dollars`);
//exercice 3
var age1=18;
var age2=10;
if (age1 == age2)
{
    console.log("age1 is equal to age2");
}
else if (age1 > age2)
{
    console.log("age1 is greater than age2");
}
else 
{
    console.log("age1 is less than age2");
}
//exercice 4
var password=1617189;
if (password == 1617189)
{
    console.log("Welcom Mohamed");
}
else
{
    console.log("Invalid Password");
}
//exercice 5
var sum=0;
for (i=0;i<=10;i++)
{
    sum+=i;
}
console.log("La somme du nomber de 1 a 10 est:"+sum);
//ecercice 6
var i=0;
while(i<=20)
{
    console.log(i);
    i++;
}
//ecercice 7
var fruits = ["Apple", "Banana", "Orange", "Grape", "Strawberry", "Cherry", "Kiwi", "Pineapple", "Melon", "Peach"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

fruits.forEach(function(fruit, numbers) {
    console.log("Fruit " + numbers + ": " + fruit);
});
//ecercice 8
var data = [
    { Name: "Mohamed", Mark: 8.5 },
    { Name: "Dan", Mark: 9 },
    { Name: "Bill", Mark: 17 },
    { Name: "Steve", Mark: 18 },
    { Name: "Elon", Mark: 9 }
];

var sum = data.reduce(function(total, item) {
    return total + item.Mark; 
}, 0);

var count = data.length; 
var average = sum / count; 

var tableData = [...data, { Name: "Average", Mark: average.toFixed(2) }];

console.table(tableData); 
//ecercice 9
var data = [
    { FirstName: "Mohamed", LastName: "Ouahib",ID: "FT776461" },
    { FirstName: "Dan", LastName: "Lok" ,ID: "HR394748"},
    { FirstName: "Bill", LastName: "Gates" ,ID: "KJ7259373"},
    { FirstName: "Steve", LastName: "Jobs" ,ID: "MA937473"},
    { FirstName: "Elon", LastName: "Mask" ,ID: "LO613415"}
];
console.table(data);
//ecercice 10
var data = [
    { Item: "Meet", Price: 100 },
    { Item: "Chicken", Price: 30 },
    { Item: "Fish", Price: 200 },
    { Item: "Eges", Price: 40 },
    { Item: "Rice", Price: 10 }
];

var sum = data.reduce(function(total, item) {
    return total + item.Price; 
}, 0);

var count = data.length;  

var tableData = [...data, { Item: "Average", Price: sum.toFixed(2) }];

console.table(tableData);
//ecercice 11
var data = [
    { Name: "Mohamed Ouahib", poste: "CEO", salary:"Everything" },
    { Name: "Dan Lok", poste: "Marketing Manager", salary:"90000"},
    { Name: "Bill Gates", poste: "COO", salary:"70000"},
];
console.table(data);
//ecercice 12
var items = [
    { name: "Creatine", price: 300, quantity: 3 },
    { name: "Meat", price: 100, quantity: 5 },
    { name: "Milk", price: 10, quantity: 30 },
    { name: "Fish", price: 500, quantity: 5 }
];

var total = 0;

items.forEach(function(item) {
    total += item.price * item.quantity; 
});

var tableData = items.map(item => ({
    Item: item.name,
    Quantity: item.quantity,
    Price: `$${item.price}`
}));

console.table(tableData);
console.log("-------------------");
console.log(`Total: $${total}`);
////Exercice 1 :
const num = [1,2,3,4,5,6];
const f = num.filter(x => x % 2 == 0);
console.log(f);
////Exercice 2 :
const grades = [8,10,15,9,13];
const g = grades.filter( x => x>= 10);
console.log(g);
////Exercice 3 :
const users = [
    {name : 'Alice', isActive : true},
    {name : 'Bob', isActive : false},
    {name : 'Charlie', isActive : true},
    {name : 'Dave', isActive : false}
];
const acitive = users.filter( x =>{
    return x.isActive == true
})
console.log(acitive);
////Exercice 4 :
const words = ['apple', 'is', 'short','cat','beautiful'];
const b = words.filter(x => x.length < 5);
console.log(b);
////Exercice 5 :
const number = [1,5,8,10,12,15];
const h = number.filter(x => x >= 5 && x <= 12);
console.log(h);