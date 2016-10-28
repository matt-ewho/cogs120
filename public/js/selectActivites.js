var wheel;

function LoadWindow() {
	console.log("dude");
	$(".modal-body").append("<div id='divWheel' data-wheelnav data-wheelnav-titlewidth='50' data-wheelnav-titleheight='50'>\
		    <div data-wheelnav-navitemimg='/images/bicycle.png' onmouseup=\"$('#myModal').modal('hide')\"></div>\
		    <div data-wheelnav-navitemimg='/images/glass.png' onmouseup=\"$('#myModal').modal('hide')\"></div>\
		    <div data-wheelnav-navitemimg='/images/food.png' onmouseup=\"$('#myModal').modal('hide')\"></div>\
		    <div data-wheelnav-navitemimg='/images/ticket.png' onmouseup=\"$('#myModal').modal('hide')\"></div>\
		    <div data-wheelnav-navitemimg='/images/wheel.png' onmouseup=\"$('#myModal').modal('hide')\"></div>\
		    <div data-wheelnav-navitemimg='/images/park.png' onmouseup=\"$('#myModal').modal('hide')\"></div>\
		    </div>");
	wheel = new wheelnav("divWheel");
}

$('#myModal').on('shown.bs.modal', function() {
	setTimeout(LoadWindow(), 500);
});

$('#myModal').on('hidden.bs.modal', function() {
	console.log("sup");
	$(".modal-body").empty();
	wheel = null;
});

function bicycle() {

}

function glass() {

}

function food() {

}

function ticket() {

}

function wheel() {

}

function park() {

}