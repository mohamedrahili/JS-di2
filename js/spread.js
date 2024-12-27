const dell = { libelle: 'dell d3', prix: 3000, quantite: 10, marque: 'dell' };
const sony = { libelle: 'sony s3', prix: 4000, quantite: 0, marque: 'sony' };
const acer = { libelle: 'acer a3', prix: 5000, quantite: 10, marque: 'acer' };
const acerx = { libelle: 'acer ax', prix: 7000, quantite: 0, marque: 'acer' };
const produit = [dell, sony, acer, acerx];
let maxPrice = 0;
let mostExpensiveItem;

for (let i = 0; i < produit.length; i++) {
    if (produit[i].prix > maxPrice) {
        maxPrice = produit[i].prix;
        mostExpensiveItem = produit[i];
    }
}

console.log('The most expensive item is '+ mostExpensiveItem.libelle+' and he will cost you ' + maxPrice + '$');