// const etd=[
//     {id : 1,name: "Khalil",prenom : "bo", age: 25},
//     {id : 2,name: "Mohamed",prenom : "ouahib", age:18},
//     {id : 2,name: "sara",prenom : "mz", age:19},
//     {id : 2,name: "Othman",prenom : "lm", age:50},
// ];
// etd.sort((a,b)=> b.age - a.age);
// const {name,prenom}=etd[0];
// console.log(name , prenom);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const t = [2,7,11,15,9];
// function findsum(t,target){
//     let pair = [];
//     for (let i = 0; i < t.length; i++) {
//         for (let j = i+1; j < t.length; j++) {
//             if (t[i] + t[j] == target) {
//                 pair.push([i,j]);
//             }
//         }
//     }
//     return pair;
// }
// console.log(findsum(t,9));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function isPalindrome(str){
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome("radar"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const t = [2,100,18,3,25];
// function plusnmx(t){
// let max = t[0];
//    for (let i = 2; i < t.length; i++) {
//       if (t[i] > max) {
//             max = t[i];
//           }
//         }
//         return max;
//  }
// console.log(plusnmx(t));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function charFrequency(str) {
//     let frequency = {};
//     for (let char of str) {
//         if (frequency[char]) {
//             frequency[char]++;
//             } else
//             frequency[char] = 1;
//             }
//             return frequency;
// }
// console.log(charFrequency("Hello world"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const t = [1,2,2,3,4,1,5,5];
// function removeDuplicates(t) {
//     let newT = [...t];
//     for (let i = 0; i < newT.length; i++) {
//         for (let j = i + 1; j < newT.length; j++) {
//             if (newT[i] === newT[j]) {
//                 newT.splice(j, 1);
//                 j--;
//                 }
//             }
//         }
//         return newT;
// }
// console.log(removeDuplicates(t));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function sortWordsByLength(sentence) {
//     let words = sentence.split(' ');
//     let sortedWords = words.sort((a, b) => a.length - b.length);
//     return sortedWords;
// }
// console.log(sortWordsByLength("I love gym"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function countUniqueWords(sentence) {
//     let words = sentence.split(' ');
//     let uniqueWords = [...new Set(words)];
//     return uniqueWords.length;
// }
// console.log(countUniqueWords("Hello World Hello"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function multiplicationTable(num) {
//     let table = [];
//     for (let i = 1; i <= 10; i++) {
//         let m = num * i;
//         if( m % 3 == 0 )
//             {table.push(m);
//         }
//     }
//         return table;
// }
// console.log(multiplicationTable(4));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
