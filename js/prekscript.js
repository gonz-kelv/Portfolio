// Kelvin Gonzales

$(document).ready(function(){
	
	$('.Content-Me, .Content-Work, .Content-Contact, .Content-Resume').hide();

	startMenu();
	
	$('.Corner1, .Corner2, .Corner3, .Corner4').on('click',function(){
		startMenu();
	})

	$('#NavButton1').on('click', function(){
		uContent();		
	});
	$('#NavButton2').on('click', function(){
		lContent();		
	});
	$('#NavButton3').on('click', function(){
		rContent();		
	});
	$('#NavButton4').on('click', function(){
		dContent();
	});
    
});

// Add event listener for arrow keys
$(document).keydown(function(e) {
	
	switch(e.which){
		case 37:
			// Call this function to move content to the left
			lContent();
		break;
		case 38:
			// Call this function to move content upwards
			uContent();
		break;
		case 39:
			// Call this function to move content to the right
			rContent();
		break;
		case 40:
			// Call this function to move content downwards
			dContent();
		break;
		default: return;
	}

});


function startMenu(){
	$('.Nav.Top').animate({
		'margin-top':'10%'
	});
	$('.Nav.Left').animate({
		'margin-left': '20%'
	});
	$('.Nav.Right').animate({
		'margin-right':'25%'
	});
	$('.Nav.Bottom').animate({
		'margin-bottom':'10%'
	});
	// Clear styling of buttons
	$('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
	$('.Content-Me, .Content-Work, .Content-Contact, .Content-Resume').hide();
	// Revert Me Page
	$('.Content-Me').attr('style',
			'padding-top:25%;padding-bottom:0;').hide();
	$('.Me-Details').attr('style',
			'width:50%;');
	// Revert Work Page
	$('.Content-Work').attr('style', 'margin-left:-20%;padding-top:15%;').hide();
	$('#Work').hide();
	$('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
	$('#Details-Game, #Details-App, #Details-Web').attr('style', '');
	$('.Details-rightA').attr('style', 'width:50%;margin-left:-20%;margin-top:0;padding-bottom:15%;').hide();
	$('.Details-leftB').attr('style', 'margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
	// Revert Contact Page
	$('.Content-Contact').attr('style','padding-top:0;').hide();
	$('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
	$('#Contact').hide();
	// Revert Resume Page
	$('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
	$('.Resume-Details').attr('style', 'padding-top:0;');
	
}

function endMenu(){
	$('.Nav.Top').animate({
		'margin-top':0
	});
	$('.Nav.Left').animate({
		'margin-left': 0
	});
	$('.Nav.Right').animate({
		'margin-right':'3%'
	});
	$('.Nav.Bottom').animate({
		'margin-bottom':0
	});
}

function uContent(){
    
    endMenu();
    
    // Clear styling of buttons
    $('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
    
    $('#NavButton1').attr('style','color:#8E001C;');
    
    
    $('#NavButton1').css('background-image','url("./img/controllerIconB.png")');
    
    $('.Content-Me').show().animate({
        'padding-top':'10%'
    },1000);
    
    // Revert Work Page
    $('.Content-Work').attr('style', 'margin-left:-20%;padding-top:15%;').hide();
    $('#Work').hide();
    $('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
    $('#Details-Game, #Details-App, #Details-Web').attr('style', '');
    $('.Details-rightA').attr('style', 'width:50%;margin-left:-20%;margin-top:0;padding-bottom:15%;').hide();
    $('.Details-leftB').attr('style', 'margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
    // Revert Contact Page
    $('.Content-Contact').attr('style','padding-top:0;').hide();
    $('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
    $('#Contact').hide();
    // Revert Resume Page
    $('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
    $('.Resume-Details').attr('style', 'padding-top:0;');
}

function lContent(){
    
    endMenu();
    
    // Clear styling of buttons
    $('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
    
    $('#NavButton2').attr('style','color:#8E001C;');
    
    $('#NavButton2').css('background-image','url("./img/controllerIcon2B.png")');
    
    $('.Resume-Details').show();
    $('.Content-Resume').show().animate({
        'padding-left': 0	
    });
    
    // Revert Me Page
    $('.Content-Me').attr('style',
            'padding-top:25%;padding-bottom:0;').hide();
    $('.Me-Details').attr('style',
            'width:50%;');
    // Revert Contact Page
    $('.Content-Contact').attr('style','padding-top:0;').hide();
    $('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
    $('#Contact').hide();
    // Revert Work Page
    $('.Content-Work').attr('style', 'margin-left:-20%;padding-top:15%;').hide();
    $('#Work').hide();
    $('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
    $('#Details-Game, #Details-App, #Details-Web').attr('style', '');
    $('.Details-rightA').attr('style', 'width:50%;margin-left:-20%;margin-top:0;padding-bottom:15%;').hide();
    $('.Details-leftB').attr('style', 'margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
}

function rContent(){
    
    endMenu();
    
    // Clear styling of buttons
    $('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
    
    $('#NavButton3').attr('style','color:#8E001C;');
    
    $('#NavButton3').css('background-image','url("./img/controllerIcon3B.png")');
    
    $('.Details-Buttons').show();
    $('.Content-Work').show().animate({
        'margin-left':'5%'
        },1000);
        
    // Revert Resume Page
    $('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
    $('.Resume-Details').attr('style', 'padding-top:0;');
    // Revert Me Page
    $('.Content-Me').attr('style',
            'padding-top:25%;padding-bottom:0;').hide();
    $('.Me-Details').attr('style',
            'width:50%;');
    // Revert Contact Page
    $('.Content-Contact').attr('style','padding-top:0;').hide();
    $('.Contact-Details').attr('style','margin-left:0;padding-top:0;');
    $('#Contact').hide();
    
    // When its clicked
    $('#Details-Game').on('click', function(){
		$('.Details-Buttons').animate({
			'width': '20%',
			'margin-left': '50%'
		});
		
		$('#Details-Game, #Details-App, #Details-Web').animate({
			'font-size': '1em'
		});
		
		$('.Details-rightA').show().animate({
			'margin-left':0
		}, 1250);
		
		// Hide but apply css changes
		$('.Details-leftB').attr('style', 'margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
	});
	
	$('#Details-App').on('click',function(){
		$('.Details-Buttons').animate({
			'width': '20%',
			'margin-left':'-10%'
		});
		$('#Details-Game, #Details-App, #Details-Web').animate({
			'font-size': '1em'
		});
		$('.Details-leftB').show().animate({
			'margin-left':'30%'
		}, 1250);
		
		// Hide but apply css changes
		$('.Details-rightA').attr('style', 'width:50%;margin-left:-20%;margin-top:0;padding-bottom:15%;').hide();
	});
    
}

function dContent(){
    
    endMenu();
    
    // Clear styling of buttons
    $('#NavButton1,#NavButton2, #NavButton3, #NavButton4').attr('style','');
    
    $('#NavButton4').attr('style','color:#8E001C;');
    
    $('#NavButton4').css('background-image','url("./img/controllerIcon4B.png")');
    
    $('.Content-Contact').show().animate({'padding-top': '15%'});
    
    // Revert Work Page
    $('.Content-Work').attr('style', 'margin-left:-20%;padding-top:15%;').hide();
    $('#Work').hide();
    $('.Details-Buttons').attr('style', 'position:absolute;margin-left:-20%;');
    $('#Details-Game, #Details-App, #Details-Web').attr('style', '');
    $('.Details-rightA').attr('style', 'width:50%;margin-left:-20%;margin-top:0;padding-bottom:15%;').hide();
    $('.Details-leftB').attr('style', 'margin-left:50%;width:50%;margin-top:0;padding-bottom:15%;').hide();
    // Revert Resume Page
    $('.Content-Resume').attr('style', 'padding-top:5%;padding-left:25%;').hide();
    $('.Resume-Details').attr('style', 'padding-top:0;');
    // Revert Me Page
    $('.Content-Me').attr('style',
            'padding-top:25%;padding-bottom:0;').hide();
    $('.Me-Details').attr('style',
            'width:50%;');
}
