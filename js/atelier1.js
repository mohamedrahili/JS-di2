const t = [2,100,18,3,25];
function plusnmx(t){
let max = t[0];
   for (let i = 1; i < t.length; i++) {
      if (t[i] > max) {
            max = t[i];
          }
        }
        return max;
 }
console.log(plusnmx(t));