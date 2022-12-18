//Business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.getPrice = function() {
  this.price;
  if (size === "small") {
    price = 10;
  } else if (size === "medium") {
    price += 14;
  } else if (size === "large") {
    price += 18;
  }
  return price;
  };