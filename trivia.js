// The Fisher-Yates shuffle technique, function code written
// by Mike Bostock (http://bost.ocks.org/mike/shuffle/)
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// Function to get the question from the selected objects
function getQuestions(input, item) {
	var userInput = prompt(input[item]["Question"]);
	var answer = input[item]["Answer"];
	if (userInput.toLowerCase() === answer) {
		score += 1;
	}
	return score;
}

// Questions & answers as an array of objects
var questions = [
	{
		"Question" : "What is the first name of the terror that flaps in the night?",
		"Answer" : "darkwing"
	},
	{
		"Question" : "Captain Planet is our ____",
		"Answer" : "hero"
	},
	{
		"Question" : "What was the first Green Lantern's first name?",
		"Answer" : "hal"
	},
	{
		"Question" : "What is the most valuable card in the game Magic the Gathering?",
		"Answer" : "black lotus"
	},
	{
		"Question" : "Cartridges of this galactically bad 80s video game, developed for the Atari 2600, were recently unearthed from a New Mexico landfill?",
		"Answer" : "et"
	},
	{
		"Question" : "What’s the speedy name of Apple’s new programming language for iOS and OS X?",
		"Answer" : "swift"
	},
	{
		"Question" : "What does HTTP stand for?",
		"Answer" : "hyper text transfer protocol"
	},
	{
		"Question" : "This widespread vulnerability in the open SSL software library sounded like a horrible coronary condition.",
		"Answer" : "heartbleed"
	},
	{
		"Question" : "Apple lost an antitrust case over its alleged attempt to control the price of what type of digital content?",
		"Answer" : "ebooks"
	}
];

// Shuffle the array and get the first three results
questions = shuffle(questions);
var ask = questions.slice(0, 3);

// Ask the user the three questions and check the answers
var score = 0;
var first = getQuestions(ask, 0);
var second = getQuestions(ask, 1);
var third = getQuestions(ask, 2);

// Tell the user how they did
if (score > 2) {
	document.write('<p>You earned the gold medal with 3 out of 3 correct!</p>');
} else if (score > 1) {
	document.write('<p>You earned the silver medal with 2 out of 3 correct!</p>');
} else if (score > 0) {
	document.write('<p>You earned the bronze medal with 1 out of 3 correct!</p>');
} else {
	document.write("<p>Well, aren't you a derp. You got 0 correct, no medal for you!</p>");
}