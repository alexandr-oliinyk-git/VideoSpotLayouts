var	w = window.innerWidth;
var	h = window.innerHeight;
var dim = new Array;

function checkDimension(){
	w = window.innerWidth;
	h = window.innerHeight;
	return [h, w];
}

$(function(){

	function resize(){
		dim = checkDimension();
		//console.log(dim[0]+' -- '+dim[1]);
		$('body').removeClass();
		if(dim[1]==dim[0]){
			$('body').addClass('square');
			$('body.square div.for-desc').removeClass('none');
			$('body.square div.vert-desc').addClass('none');
			$('article').height('100%');
			$('article').width('100%');
		}else if(dim[1]>dim[0]){
			$('body').addClass('hori');
			$('body.hori div.for-desc').removeClass('none');
			$('body.hori div.vert-desc').addClass('none');
			$('article').height(dim[1]/1.8);
			$('article').width('100%');
		}else if(dim[1]<dim[0]){
			$('body').addClass('vert');
			$('body.vert div.for-desc').addClass('none');
			$('body.vert div.vert-desc').removeClass('none');
			$('article').height('100%');
			$('article').width(dim[0]/1.8);
		}
	}
		
	resize(dim);

	window.onresize = function(event) {
	    resize();
	};

});
