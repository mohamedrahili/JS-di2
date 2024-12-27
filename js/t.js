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
