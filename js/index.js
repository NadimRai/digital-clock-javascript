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

function onReady(){
	

	var clock = new Clock('clock');
	var clock2 = new Clock('clock2',-420,"ETC");
	var clock3 = new Clock('clock3',300,'X');



}

function Clock(id,offset,label){
		offset = offset || 0;
		label = label || '';
		var d = new Date();
		this.offset =(offset+ d.getTimezoneOffset())*60*1000;
		this.id = id;
		this.label = label;
		 
		

	var that = this;
	setInterval(function(){
		that.updateClock();},1000);
	this.updateClock();
}


Clock.prototype.updateClock = function(){
			var date  = new Date();
				 date = new Date(this.offset + date.getTime());
			var clock = document.getElementById(this.id);
			clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) +":"+ this.formatDigits(date.getSeconds()) +" "+ this.label ;
		};

Clock.prototype.formatDigits= function(val){
			if(val<10) val = "0" + val;

			return val;
		};


window.onload = onReady;
