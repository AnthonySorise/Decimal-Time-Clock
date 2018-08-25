$(document).ready(function(){
	generateFramerate();
})

function generateFramerate(){
	updateFrame();
	window.setInterval(updateFrame, 864);//framerate = decimal second
}

function updateFrame(){
	updateHours();
	updateMinutes();
	updateSeconds();
}

function getDeciMS(){
	var date  = new Date();
	var regMS = date.getTime() - date.setHours(0,0,0,0);
	return regMS * 1.1574;// 100,000 decimal seconds / 86,400 standard seconds
}

function updateHours(){
	var hourTimesTen = Math.floor(getDeciMS() / 100000);
	$(".hourFill").removeClass().addClass("clockFill hourFill hourFill-" + hourTimesTen);
}

function updateMinutes(){
	//remove hours
	var ms       = getDeciMS();
	var toRemove = Math.floor(ms / 10000000);
	var ms       = ms - (toRemove * 10000000);

	var minutesTimesTen = Math.floor(ms / 10000);
	$(".minuteFill").removeClass().addClass("clockFill minuteFill minuteFill-" + minutesTimesTen);
}

function updateSeconds(){
	//remove hours and minutes
	var ms       = getDeciMS();
	var toRemove = Math.floor(ms / 100000);
	var ms       = ms - (toRemove * 100000);

	var seconds = Math.floor(ms / 1000) * 10;//round to nearest decimal second
	$(".secondFill").removeClass().addClass("clockFill secondFill secondFill-" + seconds);
}
