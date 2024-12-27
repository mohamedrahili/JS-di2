function sum(a, b) {
    return a + b;
  }

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

  module.exports = {sum, wordpair};

  
  