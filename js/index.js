let rim = { first_name: "rima", last_name: "rim", age: 10 };
let hicham = { first_name: "hichami", last_name: "hicham", age: 50 };
let karim = { first_name: "karimi", last_name: "karim", age: 15 };
let people = [rim, hicham, karim];
let youngest = people[0];
let oldest = people[0];

for (let i = 0; i < people.length; i++) {
    if (people[i].age < youngest.age) {
        youngest = people[i];
    }
    if (people[i].age > oldest.age) {
        oldest = people[i];
    }
}
console.log("The Youngest one is " + youngest.first_name + " " + youngest.last_name + " with age " + youngest.age);
console.log("The Oldest one is " + oldest.first_name + " " + oldest.last_name + " with age " + oldest.age);
