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

window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const sizeInput = document.querySelector('input[name="size"]:checked');
    const size = sizeInput.value;
    const toppingChoice = document.querySelectorAll(
      'input[name="toppings"]:checked'
    );
    const toppings = [];
    for (const input of toppingChoice) {
      toppings.push(input.value);
    }
    const pizza = new Pizza(toppings, size);

    pizza.toppings = toppings;
    pizza.size = size;
    const pizzaPrice = pizza.getPrice();

    document.querySelector("#price").innerText = "$" + pizzaPrice;
    event.preventDefault();
  });
});
