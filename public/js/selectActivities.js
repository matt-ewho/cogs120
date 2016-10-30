$('#submit').click(function() {
	var cat1 = $('#1 #text').text();
	var cat2 = $('#2 #text').text();
	var cat3 = $('#3 #text').text();

	if (cat1.length <= 0) {
		//error message
	}
	else if (cat2.length <= 0) {
		//error message
	}
	else if (cat3.length <= 0) {
		//error message 
	}
	else {
		window.location.href = "/activities/" + cat1 + "/" + cat2 + "/" + cat3;
	}
});

//For first activity 
$('#1').mousedown(function() {
	$('#modal1').modal('show');
});

$('#category11').click(function() {
	$('#1 #text').text('Category 1')
	$('#1 #img').attr('src', '/images/bicycle.png');
	$('#modal1').modal('hide');
});

$('#category21').click(function() {
	$('#1 #text').text('Category 2');
	$('#1 #img').attr('src', '/images/glass.png');
	$('#modal1').modal('hide');
});

//for second activity
$('#2').mousedown(function() {
	$('#modal2').modal('show');
});

$('#category12').click(function() {
	$('#2 #text').text('Category 1')
	$('#2 #img').attr('src', '/images/bicycle.png');
	$('#modal2').modal('hide');
});

$('#category22').click(function() {
	$('#2 #text').text('Category 2');
	$('#2 #img').attr('src', '/images/glass.png');
	$('#modal2').modal('hide');
});

//for third activity
$('#3').mousedown(function() {
	$('#modal3').modal('show');
});

$('#category13').click(function() {
	$('#3 #text').text('Category 1')
	$('#3 #img').attr('src', '/images/bicycle.png');
	$('#modal3').modal('hide');
});

$('#category23').click(function() {
	$('#3 #text').text('Category 2');
	$('#3 #img').attr('src', '/images/glass.png');
	$('#modal3').modal('hide');
});