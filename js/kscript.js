'use strict';

controller();

function controller(){
	console.log('loaded');
	
	var navButton = document.getElementsByClassName('Nav Top')[0];

	document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
		
			console.log(text);
		
	}, false);
	
	
	
};

function clickeddd(){
	
	console.log('hehe');
}
