$(document).ready(function(){
	generateFramerate();
})

function generateFramerate(){
	window.setInterval(updateFrame, 16);//62.5fps
}

function updateFrame(){
	updateHours();
	updateMinutes();
	updateSeconds();
}

function updateHours(){
	var hour = Math.floor(getDeciMS() / 1000000);
	$(".hourFill").removeClass().addClass("clockFill hourFill hourFill-" + hour);
}

function updateMinutes(){

}

function updateSeconds(){

}

function getDeciMS(){
	var date = new Date();
    var regMS = date.getTime() - date.setHours(0,0,0,0);
    return regMS * 1.1574;// 100,000 decimal seconds / 86,400 standard seconds
}