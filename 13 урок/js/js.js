/*if (jQuery){
	alert("Hi jQuery");
}*/

$(document).ready(function(){
	/*$('input').keypress(function(event){
		if (event.which === 13)
			alert("Sended message");
	})*/

	/*$('h2').on("click", function(){
		$(this).css("backgroundColor", "red");
	})

	$('li').on("mouseenter", function(){
		$(this).css("backgroundColor", "green");
	})

	$('li').on("mouseleave", function(){
		$(this).css("backgroundColor", "transparent");
	})*/

	$('#hide').click(function(){
		$('h2').fadeOut(3000);
	});

	$('#show').click(function(){
		$('h2').fadeIn(3000);
	});

	$('#slide').click(function(){
		$('h2').slideToggle(3000, function(){
			console.log("message");
		});

	});

});

