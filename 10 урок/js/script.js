/*var ul = document.getElementsByTagName("ul");
console.log(ul[0].innerHTML);
console.log(ul[0].textContent);

var li = document.getElementsByTagName("li");
//li[0].innerHTML = "New <b>text 1</b>";
//li[0].textContent = "New <b>text 1</b>";*/

/*var li3 = document.getElementById("three");
li3.classList.toggle("li3");

li3.classList.toggle("li3");*/

//var image = document.getElementsByTagName("img");
//image[0].setAttribute("src", "img/2.jpg");


var h1 = document.getElementById("header");
h1.addEventListener("click", function (argument) {
	this.style.background = 'orange';
});

var li = document.getElementsByTagName("li");

for (var i = 0; i < li.length; i++) {
	if  ((i+1) % 2 == 0){
		li[i].addEventListener("click", function (argument) {
			this.style.background = 'green';
		});
	} else{
		li[i].addEventListener("click", function (argument) {
			this.style.background = 'red';
		});
	}
}