$(function() {
	$('.ui.dropdown').dropdown();
});

$('a').click(function(e) {
	e.preventDefault();
	var city = $('.ui.dropdown').dropdown('get value');
	if (city.length <= 0) {
		$('#errorMessage').removeClass("hidden");
	}
	else {
		window.location.href = "city/" + city;
	}
});