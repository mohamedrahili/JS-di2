////Exercice 1 :
////Version 1 :
// function inword(str) {
//     let words = str.split(' ');
//     let result = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes("e")) {
//             result.push(words[i]);  
//         }
//     }    
//     return result.join(' ');  
// }
// console.log(inword("Hello my name is Mohamed"));  
////Version 2 :
// let pharse = "Hello my name is Mohamed";
// let result = pharse.split(' ').filter(x => x.includes('e')).join(' ');
// console.log(result);
////Exercice 2 :
////Version 1 :
// let word = "mohamed ouahib";
// word = word.toUpperCase();
// console.log(word);
////Version 2 :
// let word = "mohamed ouahib";
// word = word.split(' ').map(x => x.toUpperCase()).join(' ');
// console.log(word);
//// Exercice 3 :
////Version 1 :
// function wordlimit(str){
//     let words = str.split(' ');
//     let result = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 5) {
//             result.push(words[i]);
//         }
//     }
//     return result.join(' ');
// }
// console.log(wordlimit("Hello mohamed"));
////Version 2 :
// let word = "Hello mohamed";
// word = word.split(' ').filter(x => x.length > 5).join(' ');
// console.log(word);
////Exercice 4 :
////Version 1 :
// function findword(str) {
//     let words = str.split(' '); 
//     for (let i = 0; i < words.length; i++) {
//         if (words[i][0] === "p") { 
//             return words[i]; 
//         }
//     }
// }
// console.log(findword("i will punch you parker"));
////Version 2 :
// let word = "i will punch you parker";
// word = word.split(' ').find(x => x[0] === "p");
// console.log(word);
//// Exercice 5 :
////Version 1 :
// function avregelength(str) {
//     let words = str.split(' '); 
//     let sum = 0; 
//     for (let i = 0; i < words.length; i++) {
//         sum += words[i].length;
//     }
//     let avr = sum / words.length;
//     return avr;
// }
// console.log(avregelength("Hello mohamed")); 
////Version 2 :
// let word = "Hello mohamed";
// word = word.split(' ').map(x => x.length).reduce((a, b) => a + b) / word.split(' ').length;
// console.log(word);
////Exercice 6 :
////Version 1 :
// function remplacerJavaScript(str) {
//     let words = str.split(' '); 
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "JavaScript") {
//             words.splice(i, 1, "JS"); 
//         }
//     }   
//     return words.join(' '); 
// }
// console.log(remplacerJavaScript("This is a JavaScript project"));
//Version 2 :
// let word = "This is a JavaScript project, Javascript is easy";
// word = word.replace(/JavaScript/gi, "JS");
// console.log(word);
////Exercice 7 :
////Version 1 :
// function wordsorder(str){
//     let words = str.split(' ');
//     let result = words.sort((a,b) => a.length - b.length);
//     return result.join(' ');
// }
// console.log(wordsorder("This is a JavaScript project"));
//Version 2 :
// let word = "This is a JavaScript project";
// word = word.split(' ').sort((a,b) => a.length - b.length).join(' ');
// console.log(word);
////Exercice 8 :
////Version 1 :
// function motLePlusRepete(str) {
//     let words = str.split(' '); 
//     let result = {}; 
//     for (let i = 0; i < words.length; i++) {
//         if (result[words[i]]) {
//             result[words[i]]++; 
//         } else {
//             result[words[i]] = 1; 
//         }
//     }
//     let maxCount = 0;
//     let mostFrequentWord = '';
//     for (let word in result) {
//         if (result[word] > maxCount) {
//             maxCount = result[word];
//             mostFrequentWord = word;
//         }
//     }
//     return mostFrequentWord; 
// }
// console.log(motLePlusRepete("hello mohamed hello world hello")); 
////Exercice 9 :
////Version 1 :
// function wordpair(str){
//     let words = str.split(' ');
//     let evenWords = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length % 2 ===0){
//             evenWords.push(words[i]);
//         }
//     }
//     return evenWords.join(' ');
// }
// console.log(wordpair("hello mohameed"));
//Version 2 :
// let str = "hello mohameed";
// let words = str.split(' ');
// let evenWords = words.filter(word => word.length % 2 === 0);
// console.log(evenWords.join(' '));
////Exercice 10 :
////Version 1 :
// function wordscount(str) {
//     let words = str.split(' ');
//     let word = []; 
//     for (let i = 0; i < words.length; i++) {
//         if (
//             words[i][0].toLowerCase() === 'a' || words[i][0].toLowerCase() === 'e' || words[i][0].toLowerCase() === 'i' || words[i][0].toLowerCase() === 'o' || words[i][0].toLowerCase() === 'u' || words[i][0].toLowerCase() === 'y') {
//             word.push(words[i]); 
//         }
//     }
//     return word.length; 
// }
// console.log(wordscount("Apple orange banana umbrella in elephant"));
