// function onReady(){
// 	clock();
// 	setInterval(clock,10000);
	
// }

// function clock(){
// 	var date = new Date();
// 	var clock  = document.getElementById('clock') ;
// 	clock.innerHTML = formatDigits(date.getHours())+":"+formatDigits(date.getMinutes())+":"+formatDigits(date.getSeconds());


//  }
//  function formatDigits(val){
//  	if(val<10) val = "0"+ 0;
//  	return val;
//  }

window.onload = onReady;

function onReady(){
	var clock = new Clock('clock');
	var clock  = new Clock('clock2');
}

function Clock(id){	
	this.updateClock = function(){
		var date = new Date();
		var clock = document.getElementById(id);
		clock.innerHTML = this.formatDigits(date.getHours())+ ":"+
						  this.formatDigits(date.getMinutes())+ ":"+
						  this.formatDigits(date.getSeconds());
	};
	this.formatDigits = function(val){
		if(val <10) val = "0"+ val;
	return val
	};
	var that = this;
	setInterval(function(){
		that.updateClock();},1000);
	that.updateClock();
	
}





