
function Order() {
this.pizzas = [];
this.breadsticks = 0;
this.allPizzaPrice = 0;
}

function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  if(this.size === "Small") {
    return 8; 
  } else if(this.size === "Medium") {
    return 10;
  } else if(this.size === "Large") {
    return 12;
  } else if(this.size === "Extra Large") {
    return 14;
  }
}

Pizza.prototype.toppingsPrice = function() {
  return this.toppings.length * .75;
}

Pizza.prototype.getPrice = function() {
 this.onePrice = this.sizePrice() + this.toppingsPrice();
}

Order.prototype.addPizza = function(newPizza) {
  this.pizzas.push(newPizza);
}

Order.prototype.addBreadsticks = function(newBreadstick) {
  return this.breadsticks += newBreadstick;
}

Order.prototype.getAllPizzaPrice = function() {
  for (var i=0; i<= this.pizzas.length; i++){
    return this.allPizzaPrice += this.pizzas[i].onePrice;
  }
}

Order.prototype.total = function() {
  var allBreadPrice = this.breadsticks*3;
  return allBreadPrice + this.allPizzaPrice;
}

$(document).ready(function() {
  var order = new Order();
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    
    var size = $("#size").val();
    var toppings = [];
    var newPizza = new Pizza(size, toppings);
    var newBreadstick = parseInt($("input#newbreadstick").val());

    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push(this.value);
    });
    
    newPizza.getPrice();
    
    order.addPizza(newPizza);
    order.addBreadsticks(newBreadstick);
    order.getAllPizzaPrice();

    var total = order.total();

    $("#total").text("$"+total);

    $("#itemlink").append('<p>'+$("#size").val()+' Pizza, '+$("input#newbreadstick").val()+' breadsticks. (Click for Details)</p>');
    

    for(var i=0; i < parseInt($("input#newbreadstick").val()); i++){
      $("#bready").append('<img id="breadpic" src="img/breadstick.png"></img>');
    };
    
    $("#bready").show();

    newPizza.toppings.forEach(function(item){
      $("#itemlink").append('<ul id="itemdesc"><li>' + item + '</li></ul>');
    });
  });

  $("#itemlink").click(function(){
    $(this).children().show();

  });
});
