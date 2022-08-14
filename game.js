// At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
const buttonColours = ['red', 'blue', 'green', 'yellow'];
// At the top of the game.js file, create a new empty array called gamePattern.
const gamePattern = [];
// At the top of the game.js file, create a new empty array with the name userClickedPattern.
const userClickedPattern = [];

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$('.btn').click(function() {
//  Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
	const userChosenColour =  $(this).attr('id');
	userClickedPattern.push(userChosenColour);
	console.log(userClickedPattern);
	animatePress(userChosenColour);
})
// In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.

// Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
// Take the code we used to play sound in the nextSequence() function and move it to playSound().
	let audio = new Audio('sounds/' + name + '.mp3');
	audio.play();
}

// Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColour) {
// Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.
	$('#' + currentColour).addClass('pressed');
	setTimeout(function() {
		$('#' + currentColour).remove('pressed');
	}, 100);
}

// Inside game.js create a new function called nextSequence()
function nextSequence() {
	// Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
	const randomNumber = Math.floor(Math.random() * 4);

	// Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
	let randomChosenColour = buttonColours[randomNumber];

	// Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
	gamePattern.push(randomChosenColour);
	console.log(gamePattern.join(' '));

	// Use jQuery to select the button with the same id as the randomChosenColour
	$('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

	let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
	audio.play();
	playSound(randomChosenColour);
}

nextSequence()
