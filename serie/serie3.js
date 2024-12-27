// Exercice 1:
// const word = "hello2  test hello";
// const word1 = word.split(' ').filter(word => /\d/.test(word)).join(' '); 
// console.log(word1);
// Exercice 2:
// const mot = "Hello my name is mohamed";
// const mot1 = mot.split(' ').filter(x => x.length > 5);  
// console.log(mot1.join(''));  
// Exercice 3:
// const m = "This is a js exercice that will help me to be a pro";
// const m1 = m.split(' ').filter( x => x.startsWith("p"));
// console.log(m1.join(''));
// Exercice 4:
// const sentence = "Hello mohamed";
// const averageLength = sentence.split(' ').map(word => word.length).reduce((a, b) => a + b) / sentence.split(' ').length;
// console.log(averageLength);  
// Exercice 5:
// const w = "JavaScript is an amazing language and a powerful tool";
// const words = w.split(' ').map(word => {
//     if (word.includes("a")) {
//         return "Replaced";  
//     }
//     return word;  
// });
// console.log(words.join(' ')); 
// Exercice 6:
// const sentence = "JavaScript is an amazing language and a powerful tool";
// const sen= sentence.split(' ').sort((a, b) => a.length - b.length).join(' ');
// console.log(sen);
// Exercice 7:
// const sentence = "My name gym is ronnie gym";
// const words = Object.entries(
//     sentence.split(' ').reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {})
// ).reduce((max, [word, count]) => (count > max[1] ? [word, count] : max), ['', 0])[0];
// console.log(words);  

