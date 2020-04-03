// year, color, wheels, isAirBag
/*var carArrayLexus = ["2010", "black", 4, true];
console.log(carArrayLexus[3]);


var carLexus = {
	year: "2010",
	color: "black",
	wheels: 4,
	isAirBag: true
};
console.log(carArrayLexus);
console.log(carLexus);
console.log(carLexus.isAirBag);


var matrix = [
	[0, 1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9]
];

console.log(matrix[1][2]);

var person = {
	name: "Alex",
	surname: "Mayhem",
	age: 19,
	pets: ["cat", "dog"]
}

console.log(person.pets[0]);

var sellers = [
	{
		name: "Alex",
		surname: "Mayhem",
		age: 18
	},

	{
		name: "Sam",
		surname: "bell",
		age: 21
	}
];
console.log(sellers[1].name);*/

/*var user = {
	name: "Sam",
	surname: "bell",
	date_birth: 1994,
	age: 21,
	hasDiscount: true,
	calcDiscount: function (year) {
		if (2020 - this.date_birth  > 3){
			return 20;
		}else {
			return 10;
		}
	}
}

console.log(user.calcDiscount(2020));*/

document.getElementById("header").innerHTML = "Hello world";

var elements = document.getElementsByClassName("class1");

for (var i = 0; i < elements.length; i++) {
	elements[i].style.color = "red";
}

//console.log(document.getElementsByTagName("li")[0].innerHTML);

console.log(document.querySelectorAll(".class1")[1].innerHTML);