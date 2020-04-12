var startTime = new Date().getTime(); // 00:00





var makeShapeVisible = function() {

	 document.getElementById("shape").style.display = 'block';

	 document.getElementById("shape").style.width = getRandonInt(150) + 50 + "px"

	 document.getElementById("shape").style.height = getRandonInt(150) + 50 + "px"

	 document.getElementById("shape").style.left = getRandonInt(1000) + 50 + "px"

	 document.getElementById("shape").style.top = getRandonInt(500) + 50 + "px"



	 if (Math.random() < 0.25){

	 	document.getElementById("shape").style.borderRadius = "0";

	 	document.getElementById("shape").style.borderBottom = '0';

	 	document.getElementById("shape").style.backgroundColor = getRandomColor();
	 } else if (Math.random() >= 0.25 && Math.random() <= 0.60){

	 	 document.getElementById("shape").style.borderRadius = getRandonInt(80) + 20 + "%";

	 	 document.getElementById("shape").style.borderBottom = '0';

	 	 document.getElementById("shape").style.backgroundColor = getRandomColor();

	 } else{

	 	 document.getElementById("shape").style.width = "0";

	 	 document.getElementById("shape").style.height = "0";

	 	 document.getElementById("shape").style.borderRadius = "0";

	 	 document.getElementById("shape").style.borderLeft = "50px solid transparent";

	 	 document.getElementById("shape").style.borderRight = "50px solid transparent";

	 	 document.getElementById("shape").style.borderBottom = '100px solid ' + getRandomColor();

	 	 document.getElementById("shape").style.backgroundColor = 'transparent';

	 }



	 startTime = new Date().getTime();

}



makeShapeVisible();



document.getElementById("shape").addEventListener("click", function() {

	var finishTime = new Date().getTime();

	var reactionTime = (finishTime - startTime) / 1000;

	document.getElementById("time").innerHTML = "Time: " + reactionTime; 

	setTimeout(makeShapeVisible(), Math.random() * 1500);

});





function getRandonInt (max) {

	return Math.random() * max; 

}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}