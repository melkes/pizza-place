//Business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  if (size === "small") {
    this.price = 10;
  } else if (size === "medium") {
    this.price = 14;
  } else if (size === "large") {
    this.price = 18;
  }
}

Pizza.prototype.getPrice = function() {
  return this.price;
  };

