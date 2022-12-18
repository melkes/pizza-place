Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: let myPizza = new Pizza(["olives", "mushrooms"], "medium");
Expected Output: Pizza { toppings: ["olives", "mushrooms"], size: "medium" }

Describe: Pizza.prototype.getPrice

Test: "It should return a number for the price"
Code: let myPizza.price = 14;
Expected Output: Pizza { toppings: ["olives", "mushrooms"], size: "medium", price: 14 }

Test: "It should return a price based on size"
Code: let myPizza = new Pizza(["olives", "mushrooms"], "medium");
Expected Output: Pizza { toppings: ["olives", "mushrooms"], size: "medium", price: 14 }

