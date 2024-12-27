const { default: TestRunner } = require("jest-runner");
const { default: test, TestContext } = require("node:test");

//Exercice 1 :
function inword(str) {
    let words = str.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("e")) {
            result.push(words[i]);  
        }
    }    
    return result.join(' ');  
}
console.log(inword("Hello my name is Mohamed"));  
//Exercice 2 :
let word = "mohamed ouahib";
word = word.toUpperCase();
console.log(word);
// Exercice 3 :
function wordlimit(str){
    let words = str.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
            result.push(words[i]);
        }
    }
    return result.join(' ');
}
console.log(wordlimit("Hello mohamed"));
//Exercice 4 :
function findword(str) {
    let words = str.split(' '); 
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === "p") { 
            return words[i]; 
        }
    }
}
console.log(findword("i will punch you in the face parker"));
// Exercice 5 :
function avregelength(str) {
    let words = str.split(' '); 
    let sum = 0; 
    for (let i = 0; i < words.length; i++) {
        sum += words[i].length;
    }
    let avr = sum / words.length;
    return avr;
}
console.log(avregelength("Hello mohamed")); 
//Exercice 6 :
function remplacerJavaScript(str) {
    let words = str.split(' '); 
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "JavaScript") {
            words.splice(i, 1, "JS"); 
        }
    }   
    return words.join(' '); 
}
console.log(remplacerJavaScript("This is a JavaScript project"));
//Exercice 7 :
function wordsorder(str){
    let words = str.split(' ');
    let result = words.sort((a,b) => a.length - b.length);
    return result.join(' ');
}
console.log(wordsorder("This is a JavaScript project"));
//Exercice 8 :
function motLePlusRepete(str) {
    let words = str.split(' '); 
    let result = {}; 
    for (let i = 0; i < words.length; i++) {
        if (result[words[i]]) {
            result[words[i]]++; 
        } else {
            result[words[i]] = 1; 
        }
    }

    let maxCount = 0;
    let mostFrequentWord = '';

    for (let word in result) {
        if (result[word] > maxCount) {
            maxCount = result[word];
            mostFrequentWord = word;
        }
    }
    return mostFrequentWord; 
}
console.log(motLePlusRepete("hello mohamed hello world hello")); 
//Exercice 9 :
function wordpair(str){
    let words = str.split(' ');
    let evenWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 ===0){
            evenWords.push(words[i]);
        }
    }
    return evenWords.join(' ');
}
console.log(wordpair("hello mohameed"));
//Exercice 10 :
function wordscount(str) {
    let words = str.split(' ');
    let word = []; 

    for (let i = 0; i < words.length; i++) {
        if (
            words[i][0].toLowerCase() === 'a' || words[i][0].toLowerCase() === 'e' || words[i][0].toLowerCase() === 'i' || words[i][0].toLowerCase() === 'o' || words[i][0].toLowerCase() === 'u' || words[i][0].toLowerCase() === 'y') {
            word.push(words[i]); 
        }
    }
    return word.length; 
}
console.log(wordscount("Apple orange banana umbrella in elephant"));
//Exercice 11 version 1:
const mot = "background-color";
const mot2 = mot.split('-').map((e, i) =>i === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)); 
console.log(mot2.join(''));
