var app = {};

app.colourSwatches = {
		bottle : ["#f7b5b9","#e93830","#e6eadc","#8aa640","#ffef7e"],
		castello : ["#aa0621", "#fdc101","#003d96","#61585b", "#fcfce2"],
		darjeeling : ["#f2b11f", "#399469","#d86230","#ebe1e0", "#94caec"],
		fantasticfox : ["#531613", "#bc6327","#ffc842","#aa421b", "#b5845c"],
		grandbudapest : ["#bd9fa7", "#cb8397","#d3b47e","#614635", "#807e93"],
		hotelchevalier : ["#496050", "#e9d157","#b99364","#dadbcd", "#9cbbb6"],
		lifeaquatic : ["#0b6e85", "#ebe367","#5cae88","#c6491d", "#c0dad9"],
		moonrise : ["#68a1b4", "#fcdd47","#b2b363","#b30016", "#e6bfae"],
		prada : ["#f9a179", "#9d83a6","#c35240","#ebd5b0", "#57403a"],
		rushmore : ["#62acd3","#dfc33c","#d58c02","#980300","#cecdd2"],
		tenenbaums : ["#fcc4df", "#c5101f","#e0ae67","#d2e7fa", "#5d3d28"]
};

app.getColours = function(palette) {

	for (var i = 0; i < palette.length; i++) {
	
	 var colourDiv = $('<div>').addClass('colours').css('background', palette[i]).append('<p>'+ palette[i] + '</p>');
	 $('.paletteHolder').append(colourDiv);
	    
	}
};

app.getDisplay = function() {
	$('.choose').remove();
	$('.title').remove();
	$('.wes').remove();
	$('.holder').css('display', 'block');
	$('h3').text('Wes Anderson\'s');
};

app.clearMovie = function(){
	$('.wrapper').removeClass('bottle_bg castello_bg darjeeling_bg fox_bg grandbudapest_bg hotelchevalier_bg lifeaquatic_bg moonrise_bg prada_bg rushmore_bg tenenbaums_bg');
	$('h3').empty();
	$('.paletteHolder').empty();
};

app.intro = function() {
	$('.title').html('<span>Wes Anderson</span>').append('<br>Movie Palettes');
	$('.wes').html('<img src="images/wes.png">');
	$('.choose').text('Choose a movie');
};

app.getMovie = function(movie){

	app.clearMovie();

	if (movie === "bottlerocket") {
		$('.wrapper').addClass('bg bottle_bg').hide().fadeIn(800); 
		app.getDisplay();
		$('h1').text('Bottle Rocket');
		$('h2').text('"Wow, you\'re really complicated"');
		app.getColours(app.colourSwatches.bottle);
	} 
	else if (movie === "castello") {
		$('.wrapper').addClass('bg castello_bg').hide().fadeIn(800); 
		app.getDisplay();
		$('h1').text('Castello Cavalcanti');
		$('h2').text('');
		app.getColours(app.colourSwatches.castello);
	}
	else if (movie === "darjeeling") {
		$('.wrapper').addClass('bg darjeeling_bg').hide().fadeIn(800); 
		app.getDisplay();
		$('h1').text('The Darjeeling Limited');
		$('h2').text('"Do you want to go in the bathroom and smoke a cigarette with me?"');
		app.getColours(app.colourSwatches.darjeeling);
	}  
	else if (movie === "fantasticfox") {
		$('.wrapper').addClass('bg fox_bg').hide().fadeIn(800); ;
		app.getDisplay();
		$('h1').text('Fantastic Mr. Fox');
		$('h2').text('"That was pure wild animal craziness"');
		app.getColours(app.colourSwatches.fantasticfox);
	}
	else if (movie === "grandbudapest") {
		$('.wrapper').addClass('bg grandbudapest_bg').hide().fadeIn(800); ;
		app.getDisplay();
		$('h1').text('The Grand Budapest Hotel');
		$('h2').text('"Keep your hands off my lobby boy!"');
		app.getColours(app.colourSwatches.grandbudapest);
	} 
	else if (movie === "hotelchevalier") {
		$('.wrapper').addClass('bg hotelchevalier_bg').hide().fadeIn(800); ;
		app.getDisplay();
		$('h1').text('Hotel Chevalier');
		$('h2').text('"You wanna see my view of Paris?"');
		app.getColours(app.colourSwatches.hotelchevalier);
	}
	else if (movie === "lifeaquatic") {
		$('.wrapper').addClass('bg lifeaquatic_bg').hide().fadeIn(800); ;
		app.getDisplay();
		$('h1').text('The Life Aquatic with Steve Zissou');
		$('h2').text('"The deeper you go, the weirder life gets"');
		app.getColours(app.colourSwatches.lifeaquatic);
	}  
	else if (movie === "moonrise") {
		$('.wrapper').addClass('bg moonrise_bg').hide().fadeIn(800); ;
		app.getDisplay();
		$('h1').text('Moonrise Kingdom');
		$('h2').text('"We\'re in love. We just want to be together. What\'s wrong with that?"');
		app.getColours(app.colourSwatches.moonrise);
	} 
	else if (movie === "rushmore") {
	$('.wrapper').addClass('bg rushmore_bg').hide().fadeIn(800); ;
	app.getDisplay();
	$('h1').text('Rushmore');
	$('h2').text('"She\'s sweet, but she\'s fucked-up."');
	app.getColours(app.colourSwatches.rushmore);     
	}
	else  {
		$('.wrapper').addClass('bg tenenbaums_bg').hide().fadeIn(800); ;
		app.getDisplay();
		$('h1').text('The Royal Tenenbaums');
		$('h2').text('"You probably don\'t even know my middle name"');
		app.getColours(app.colourSwatches.tenenbaums);
	}
	
}; // end movie app


$(function(){


	$('body').fadeIn(800);
	app.intro();

	$('select.movieChoices').change(function(e){
		e.preventDefault();
		var movie = $('select option:selected').val();
		app.getMovie(movie);

		}); // end change



}); // end doc ready
