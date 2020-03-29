/*var func = function name() {
	return "Hello world";
}

alert(func());

function isNumberEven (number) {
	return number % 2 == 0;
}

console.log(isNumberEven(5));
*/



/*var color1 = "red";
var color2 = "orange";
var color3 = "yellow";
var color4 = "green";
var color5 = "blue";
var color6 = "ocean";
var color7 = "purple";


var rainbowColors = ["red", "orange", "yellow", "green", "blue", "ocean", "purple"];
console.log(rainbowColors);

rainbowColors.push("coral");
console.log(rainbowColors);

rainbowColors.pop();
console.log(rainbowColors);

rainbowColors.unshift("Coral");
console.log(rainbowColors);

rainbowColors.shift();
console.log(rainbowColors);

var index = rainbowColors.indexOf("green");
console.log(index);

var cars = ["KIA", "Opel", "BMW", "Mercedes", "Tayota"];
console.log(cars);


var getGermanyCars = cars.slice(2, 4);
console.log(getGermanyCars);*/

var arr = [1, undefined, "Hello"];

for (var i = 0; i < arr.length; i++) {
	if (arr[i] != undefined)
		console.log(arr[i]);
}