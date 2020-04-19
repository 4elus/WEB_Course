$(document).ready(function(){
	//var g = prompt("Edit");
	$('ul').on('click', 'span', function(event){
		$(this).parent().fadeOut(function(){
			$(this).remove();
		});
	});

	$('input').keypress(function(event){
		if (event.which === 13){
			var itemText = $(this).val();
			$(this).val('');
			$('ul').append('<li>' + itemText + '<span><i class="fas fa-backspace"></i></span></li>');

			//<li>Lemon<span><i class="fas fa-backspace"></i></span></li>
		}
	})

	$('h2 span').click(function(){
		$('input').fadeToggle();
	});
});



