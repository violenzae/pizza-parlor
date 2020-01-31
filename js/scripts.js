function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  if(this.size === "s")
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
    

    console.log(toppings)

  });
});