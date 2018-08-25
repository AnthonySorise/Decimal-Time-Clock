$(document).ready(function(){
	//initialize clock
	updateSeconds();
	updateMinutes();
	updateHours();

	//start framerate that updates clock
	generateFramerate();
})

function generateFramerate(){
	updateFrame();
	window.setInterval(updateFrame, 864);//framerate = decimal second
}

function updateFrame(){
	//update seconds every frame = every decimal time second
	var secondsTimesTen = updateSeconds();
	//update minutes every 10 frames = every 10 decimal time seconds
	if(secondsTimesTen % 100 == 0){
		var minutesTimesTen = updateMinutes();
		//update hours every 100 frames = every 100 decimal time seconds (decimal time minute)
		if(minutesTimesTen % 10 == 0){
			updateHours();
		}
	}
}

function getDeciMS(){
	var date  = new Date();
	var regMS = date.getTime() - date.setHours(0,0,0,0);
	return regMS * 1.1574;// 100,000 decimal seconds / 86,400 standard seconds
}

function updateSeconds(){
	//remove hours and minutes
	var ms       = getDeciMS();
	var toRemove = Math.floor(ms / 100000);
	var ms       = ms - (toRemove * 100000);

	var secondsTimesTen = Math.floor(ms / 1000) * 10;//round to nearest decimal second
	$(".secondFill").removeClass().addClass("clockFill secondFill secondFill-" + secondsTimesTen);
	return secondsTimesTen
}

function updateMinutes(){
	//remove hours
	var ms       = getDeciMS();
	var toRemove = Math.floor(ms / 10000000);
	var ms       = ms - (toRemove * 10000000);

	var minutesTimesTen = Math.floor(ms / 10000);
	$(".minuteFill").removeClass().addClass("clockFill minuteFill minuteFill-" + minutesTimesTen);
	return minutesTimesTen;
}

function updateHours(){
	var hourTimesTen = Math.floor(getDeciMS() / 100000);
	$(".hourFill").removeClass().addClass("clockFill hourFill hourFill-" + hourTimesTen);
}