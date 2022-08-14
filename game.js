// At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
const buttonColours = ['red', 'blue', 'green', 'yellow'];
// At the top of the game.js file, create a new empty array called gamePattern.
const gamePattern = [];

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
}

nextSequence()
