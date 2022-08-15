// Constant Variables 
const buttonColours = ['red', 'blue', 'green', 'yellow'];
const gamePattern = [];
const userClickedPattern = [];
let gameStarted = false;
let level = 0;

if (!gameStarted) {
	$('#level-title').text('Level ' + level);
	nextSequence();
	gameStarted = true;
}

// jQuery Event Listeners
$('.btn').click(function() {
	const userChosenColour =  $(this).attr('id');
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
})

// Functions

function checkAnswer() {
	
}

// have audio play
function playSound(name) {
	let audio = new Audio('sounds/' + name + '.mp3');
	audio.play();
}

// Animating the Squares
function animatePress(currentColour) {
	$('#' + currentColour).addClass('pressed');
	setTimeout(function() {
		$('#' + currentColour).remove('pressed');
	}, 100);
}

// Showing the sequence of the colors
function nextSequence() {
	$('#level-title').text('Level ' + level);
	const randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	console.log(gamePattern.join(' '));
	$('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);
	level++;
}