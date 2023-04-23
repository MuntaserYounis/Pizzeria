var pizza = {};

function pizzaOven(crustType,sauceType,cheeses,toppings){
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

var p3 = pizzaOven("pan crust","marinara",["cheddar","pecorino-romano"],["olives","mushrooms"]);
console.log(p3);

var p4 = pizzaOven("thin crust","hollandaise","mozzarella",["corn","olives"]);
console.log(p4);


var btnRandom= document.querySelector("button");
var order = document.querySelector("h1");

var random1 = ["deep dish"," traditional"," mozzarella",[" pepperoni","sausage"]];
var random2 = ["hand tossed","marinara","cheddar",[" chicken","corn"]];
var random3 = ["gluten free"," white sauce"," feta",[" bell peppers","onions"]];
var random4 = ["hawaiian bread"," marinara"," mozzarella",[" sausage","mushrooms"]];
var pizzaOptions = [random1,random2,random3,random4];

function selectRandom(){
    var x = Math.floor(Math.random()*(pizzaOptions.length));
    console.log(x);
    order.innerText = pizzaOptions[x];
}

