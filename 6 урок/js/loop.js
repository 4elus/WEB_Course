var i = 1;

while (i <= 10) {
	console.log(i);
	i++; // MUST BE !!!!!!!!!!!!!!!!!!!!
}

console.log("Loop finished!");

for (var i = 2; i < 10; i++){
	for (var j = 1; j <= 10; j++) {
		console.log(i + " * " + j + " = " + (i*j));
	}
}

var i = 1;

while(i <= 30){
	if (i % 4 == 0)
		console.log(i);
	i++;
}