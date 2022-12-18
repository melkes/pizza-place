# Pizza Parlor

## By Mike Wilkes

#### _A website for a pizza place using Javascript objects and constructors to allow creation of custom pizza order with pricing_
---

## Technologies Used

* Git
* HTML
* CSS/Bootstrap
* Javascript

## Setup/Installation Requirements

* Clone this repo and open index.html

## Known bugs
* UI logic is not complete
* Functionality can be tested in console using TDD tests at bottom of the readme.
## Roadmap
### Needed improvements:
* Submit button in html/UI logic in Javascript
* Better design/styling
* More complexity, e.g. more options for pizzas.

---
## License

MIT License

Copyright (c) _2022_ _Mike Wilkes_ 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


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

Test: "It should return a price based on size, and add $1.50 for each topping"
Code: let myPizza = new Pizza(["olives", "mushrooms"], "medium");
Expected Output: Pizza { toppings: ["olives", "mushrooms"], size: "medium", price: 17 }