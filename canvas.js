
var canvas;
var ctx;
var lastPt = null;
var offset = 75;

function updateCanvas(){
	var touchzone = document.getElementById("mycanvas");
	ctx = touchzone.getContext("2d");
	var x = event.touches[0].pageX;
	var y = event.touches[0].pageY;
	
	ctx.lineTo(x,y -offset);
	
	ctx.lineWidth=5;
	ctx.stroke();
	
}

function end(e) {
	e.preventDefault();
}

function init() {
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove", updateCanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touchzone.getContext("2d");
	mycanvas.width = mycanvas.width; //reset canvas
	ctx.fillStyle="grey";
	ctx.fillRect(0, 0, mycanvas.width, mycanvas.height);
}



