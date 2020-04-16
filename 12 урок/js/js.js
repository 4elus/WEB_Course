/*if (jQuery){
	alert("Hi jQuery");
}*/

$(document).ready(function(){
	/*
		CSS
	var myStyle = {
		color: 'purple',
		background: 'orange',
		border: '5px solid red'
	};

	$('h2').css(myStyle);

	$('li').css("color", "orange");*/

/* TEXT()
	console.log($('ol li').text());
	$('h2').text('New value');*/

		// HTML()
	//console.log($('li').html('<a href="http://google.com">Google</a>'));

/* attr()
	$('#photo').click(function(){
		$(this).attr({
			src: "img/orange.jpg",
			width: "150px",
			height: '150px'
		})
	});*/

//VAL()
//	$('input').val("Alexander");

// CLASS()
/*
	//$('li:gt(2)').addClass('first');
	//$('li').removeClass('first');
	$("li").toggleClass('first');
	$("li").toggleClass('first');*/

	$('li').click(function(){
		$(this).toggleClass("done");
	});
});

