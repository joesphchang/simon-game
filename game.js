// Constant Variables 
var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(document).keypress(function() {
	if (!gameStarted) {
	$('#level-title').text('Level ' + level);
	nextSequence();
	gameStarted = true;
	}
})


// jQuery Event Listeners
$('.btn').click(function() {
	const userChosenColour =  $(this).attr('id');
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(userClickedPattern.length - 1);
})

// Functions

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
		setTimeout(function() {
			nextSequence();
		}, 1000);
	}
} else {
		playSound('wrong');
		$('body').addClass('game-over');
		$('#level-title').text('Game Over, Press Any Key to Restart!');

		setTimeout(function() {
			$('body').removeClass('game-over');
		}, 200);
	
		startOver();
	}
}

// have audio play
function playSound(name) {
	var audio = new Audio('sounds/' + name + '.mp3');
	audio.play();
}

// Animating the Squares
function animatePress(currentColour) {
	$('#' + currentColour).addClass('pressed');
	setTimeout(function() {
		$('#' + currentColour).removeClass('pressed');
	}, 100);
}

// Showing the sequence of the colors
function nextSequence() {
	userClickedPattern = [];	
	level++;
	$('#level-title').text('Level ' + level);
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);
}

function startOver() {
	level = 0;
	gamePattern = [];
	gameStarted = false; 
}