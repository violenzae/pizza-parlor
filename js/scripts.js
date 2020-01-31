var order = new Order(pizzas, breadsticks);
var pizzas = [];
var breadsticks = 0;

function Order() {
this.pizzas = [];
this.breadsticks = 0;
}

function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
}


Order.prototype.addPizza = function(newPizza) {
  this.pizzas.push(newPizza);
}

Order.prototype.addBreadsticks = function(newBreadstick) {
  return this.breadsticks += newBreadstick;
}

Pizza.prototype.sizePrice = function() {
  if(this.size === "s") {
    return 8; 
  } else if(this.size === "m") {
    return 10;
  } else if(this.size === "l") {
    return 12;
  } else if(this.size === "xl") {
    return 14;
  }
}

Pizza.prototype.toppingsPrice = function() {
  return this.toppings.length * .75;
}

Pizza.prototype.getPrice = function() {
  return this.sizePrice() + this.toppingsPrice();
}

Order.prototype.pizzasTotal = function() {
  return 
}

$(document).ready(function() {


  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    
    var size = $("#size").val();
    var toppings = [];
    var newPizza = new Pizza(size, toppings);
    var newBreadstick = parseInt($("input#newbreadstick").val());


    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push(this.value);
    });
    
    var pizzaTotal = newPizza.getPrice();

    order.addPizza(newPizza);
    order.addBreadsticks(newBreadstick);
 
    

    $("#total").text("$"+pizzaTotal);

    console.log(order);
  });
});