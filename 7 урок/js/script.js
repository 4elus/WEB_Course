/*var text = "apple, car black";
var g = text.split(",");

for (var i = 0; i < g.length; i++) {
	console.log(g[i]);
}*/

function startGame() {

	var pcNumber = generateNumber();
	var humNumber;
	var life = 3;
	var points = 1000;
	alert(pcNumber);

	do{
		humNumber = prompt("Введите число: ");

		if (humNumber == -1){
			alert("Уже уходите :(");
			return;
		}

		if (humNumber >= 1 && humNumber <= 10){
			if (humNumber > pcNumber){
				alert("Число компьютера меньше");
				life--;
			}
			else if (humNumber < pcNumber){
				alert("Число компьютера больше");
				life--;
			}
		}else{
			alert("Не дури. Число должно быть в пределаъ от 1 до 10");
		}

		/*if (life == 0){
			alert("Жизни исcякли");
			return;
		}*/


	}while (humNumber != pcNumber)

	alert("Вы угадали!");
	alert("Выши очки: "  + (points * life));
}

function generateNumber () {
	return Math.floor(Math.random() * (10 - 1)) + 1;
}