var color = "asdsad";

/*if (color == "green")
	alert("Go!");
else if (color == "yellow")
	alert("Prepare");
else if (color == "red")
	alert("Stop");
else
	alert("I don't know this color");*/

/*switch (color) {
	case "green":
		alert("Go!");
		break;
	case "yellow":
		alert("Prepare");
		break;
	case "red":
		alert("Stop");
		break;
	default:
		alert("I don't know this color");
}*/
var age = 14;

switch (true) {
	case age >= 0 && age <= 12:
		alert("Baby");
		break;
	case age >= 13 && age <= 17:
		alert("Teenger");
		break;
	case age >= 18 && age <= 30:
		alert("Adult");
		break;
	default:
		alert("Old");
		break;
}

var weight = 70;
var height = 1.73;
var res = weight / (height * height);

(res > 28) ? alert("Redundant") : alert("Normal");

