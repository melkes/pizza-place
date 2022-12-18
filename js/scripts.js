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

Pizza.prototype.getPrice = function() {
  return this.basePrice + this.toppings.length * 1.5;
  };


