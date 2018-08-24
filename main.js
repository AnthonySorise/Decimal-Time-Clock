$(document).ready(function(){
	generateFramerate();
})

function generateFramerate(){
	window.setInterval(updateFrame, 864);//framerate = decimal second
}

function updateFrame(){
		updateHours();
		updateMinutes();
		updateSeconds();
}

function updateHours(){
	var hourTimeTen = Math.floor(getDeciMS() / 100000);
	$(".hourFill").removeClass().addClass("clockFill hourFill hourFill-" + hourTimeTen);
}

function updateMinutes(){
	//remove hours
	var ms = getDeciMS();
	var toRemove = Math.floor(ms / 10000000);
	var ms =      ms - (toRemove * 10000000);

	var minutes =    Math.floor(ms / 10000);
	$(".minuteFill").removeClass().addClass("clockFill minuteFill minuteFill-" + minutes);
}

function updateSeconds(){
	//remove hours and minutes
	var ms = getDeciMS();
	var toRemove = Math.floor(ms / 100000);
	var ms =      ms - (toRemove * 100000);

	var seconds =    Math.floor(ms / 1000) * 10;//round to nearest decimal second
	$(".secondFill").removeClass().addClass("clockFill secondFill secondFill-" + seconds);
}

function getDeciMS(){
	var date = new Date();
    var regMS = date.getTime() - date.setHours(0,0,0,0);
    return regMS * 1.1574;// 100,000 decimal seconds / 86,400 standard seconds
}