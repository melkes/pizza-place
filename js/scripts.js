//Business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  if (size === "small") {
    this.basePrice = 10;
  } else if (size === "medium") {
    this.basePrice = 14;
  } else if (size === "large") {
    this.basePrice = 18;
  }
}

Pizza.prototype.getPrice = function () {
  return this.basePrice + this.toppings.length * 1.5;
};
const toppings = [];
const size = "";

const pizza = new Pizza(toppings, size);
const pizzaPrice = pizza.getPrice();

window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // i don't think I need this if I'm just displaying price
    //const sizeInput = document.querySelector('input[name="size"]:checked');
    document.querySelector("#price").innerText = "$" + price;
    event.preventDefault();
  });
});
