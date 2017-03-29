var main = function (){
	//slideshow
	$('#slideshow > div:gt(0)').hide();
	setInterval(function(){
		$('#slideshow > div:first').fadeOut(1000).next().delay(1000).fadeIn(1000).end().appendTo('#slideshow');
	}, 4001);

	// portfolio list
	$('ul.category a').on('focus', function(){
		$('ul.category a').removeClass();
		$(this).addClass('active');
	});

	// portfolio filter
	$('.filter-button').click(function(){
		var value = $(this).attr('data-filter');
		if(value == "all"){
			$('.filter').show();
		} else {
			$('.filter').not('.'+value).fadeOut(500);
			$('.filter').filter('.'+value).show();
		};
	});

	//input 
	$('input').on('focus', function(){
		$('#mail').addClass('move');
	});
	$('input').on('blur', function(){
		$('#mail').removeClass('move');
	});


	//smooth scroll
	jQuery.scrollSpeed(200, 600);
};

$(document).ready(main);