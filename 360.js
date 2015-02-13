/*
*/
function Move360(div,imgFolder,imgCount,style){
	var my = this;
	this.div = div;
	this.imgFolder = imgFolder;
	this.imgCount = imgCount;
	this.img = [];
	this.imgDiv = null;
	this.index = 53;
	this.style = style;
	this.x; this.dx; this.timer;
	this.move1 = true;
	this.move2 = true;
	this.init = function(){
		
		my.imgDiv = document.createElement('img');
		my.imgDiv.className = my.style;
		my.imgDiv.src = my.img[53].src;
		my.imgDiv.useMap = '#1';
		my.div.appendChild(my.imgDiv);
		my.imgDiv.addEventListener('touchstart', my.TouchStart, false);
		my.imgDiv.addEventListener('touchmove', my.TouchMove, false);
		my.imgDiv.addEventListener('touchend', my.TouchEnd, false);
		//my.imgDiv.addEventListener('mousedown', my.TouchStart, false);
		//my.imgDiv.addEventListener('mousemove', my.TouchMove, false);
		//my.imgDiv.addEventListener('mouseup', my.TouchEnd, false);
		my.AutoRotate();
	};
	
	this.AutoRotate = function(){
		if(my.index>=my.imgCount-1) my.index = 0;
		else my.index = my.index + 1;
		my.imgDiv.src = my.img[my.index].src;
		my.imgDiv.useMap = '#'+(my.index + 1);
		my.timer = setTimeout(my.AutoRotate,80,my);
	};
	
	this.AutoRotateEnd = function(){
		if(my.index>=my.imgCount-1) my.index = 0;
		else my.index = my.index + 1;
		my.imgDiv.src = my.img[my.index].src;
		my.imgDiv.useMap = '#'+(my.index + 1);
		my.timer = setTimeout(my.AutoRotateEnd,80,my);
	};

	this.TouchStart = function(e){
		clearTimeout(my.timer);
		my.x = e.changedTouches[0].clientX;
		y = e.changedTouches[0].clientY;
		//my.x = e.clientX;
	
	};
	this.TouchMove = function(e){
		e.preventDefault();
		
		var x = e.changedTouches[0].clientX;
	
			my.dx = x - my.x;	
			var m = parseInt(Math.abs(my.dx)/8);
			// Move left
			if(my.dx < 0){
				my.index = my.index - m;
				if(my.index<0) my.index = my.imgCount;
			}
			if(my.dx > 0){
				my.index = my.index + m;
				if(my.index>my.imgCount) my.index = 0;
			} 
			my.x = x;
			//if(my.index=-1) return;			
			my.imgDiv.src = my.img[my.index].src;
			my.imgDiv.useMap = '#'+(my.index + 1);	
	};
	
	this.TouchEnd = function(){
		my.AutoRotateEnd();
	};
	
	//this.init();
	 
}

/*

window.onload = function(){
	document.body.addEventListener('touchmove', function(e){e.preventDefault();},false);
	
	
} 
*/