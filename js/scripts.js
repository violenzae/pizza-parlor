function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
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

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    
    var size = $("#size").val();
    var toppings = []
    var newPizza = new Pizza(size, toppings);


    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push(this.value);
    });
    
    var total = newPizza.getPrice();

    $("#total").text(total);

    console.log(total);

  });
});