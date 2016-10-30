$('#category1').click(function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('#category1').addClass('active');
	$('#first').addClass('active');
});

$('#category2').click(function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('#category2').addClass('active');
	$('#second').addClass('active');
});

$('#category3').click(function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('#category3').addClass('active');
	$('#third').addClass('active');
});