var favoriteFoods = ["Pizza", "Pasta", "Steak", "Chocolate", "Cake", "Fruit", "FRIES", "Spaghetti", "Falafel", "Sushi"];

var button = $('button');
var food = $('.food');

button.on('click', message);

function message() {
  event.preventDefault();
  var random = Math.floor(Math.random()*(favoriteFoods.length - 1));
  var mess = favoriteFoods[random];
  food.text(mess);
}
