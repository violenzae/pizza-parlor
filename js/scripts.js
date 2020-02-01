var order = new Order(pizzas, breadsticks);
var pizzas = [];
var breadsticks = 0;

var allPizzaPrice = 0;


function Order() {
this.pizzas = [];
this.breadsticks = 0;
}

function Pizza(size, toppings, onePrice) {
this.size = size;
this.toppings = toppings;
this.onePrice = onePrice;
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
    return allPizzaPrice += this.pizzas[i].onePrice;
  }
}

Order.prototype.total = function() {
  var allBreadPrice = this.breadsticks*3;
  return allBreadPrice + allPizzaPrice;
}

Order.prototype.breadPics = function() {
  for(var i=0; i < parseInt($("input#newbreadstick").val()); i++){
    $("#bready").append('<img id="breadpic" src="img/breadstick.png"></img>');
  }
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
    
    newPizza.getPrice();
    
    order.addPizza(newPizza);
    order.addBreadsticks(newBreadstick);
    order.getAllPizzaPrice();

    var total = order.total();

    $("#total").text("$"+total);

    $("#itemlink").append('<p id="itemlink">'+$("#size").val()+' Pizza, '+$("input#newbreadstick").val()+' breadsticks. (Click for Details)</p>');


    newPizza.toppings.forEach(function(item){
      $("#itemlink").append('<ul id="itemdesc"><li>' + item + '</li></ul>');
    });
  });

  $("#itemlink").click(function(){
    $(this).children("#itemdesc").show();
    order.breadPics();
    $("#bready").show();
    
  });
});
