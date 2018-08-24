$(document).ready(function(){
	generateFramerate();
})

function generateFramerate(){
	window.setInterval(updateFrame, 17);
}

function updateFrame(){
	updateHours();
	updateMinutes();
	updateFrame();
}

function updateHours(){
	
}

function updateMinutes(){

}

function updateSeconds(){

}

function getDeciMS(){
	var d = new Date();
    return d.getTime() - d.setHours(0,0,0,0);
}