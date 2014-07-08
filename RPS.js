$(document).ready(function(){

// Show scorecard after user click
$("div").click(function(){
	$("section").css("display","block");
});

//Global variables
window.computerChoice = "";
window.num_wins = 0;
window.num_losses = 0;
window.num_ties = 0;

// Computer choice selection logic
function CompsChoice(){
	computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
	};

// Recognizes when items are clicked (user choice + winner logic)
	$(".rock").click(function(){
		CompsChoice();
			if (computerChoice === "rock") {
				tie(); compRock()
			} else if (computerChoice === "paper") {
				lose(); compPaper()
			} else { win(); compScissors() };
	});

	$(".paper").click(function(){
		CompsChoice();
			if (computerChoice === "rock") {
				win(); compRock()
			} else if (computerChoice === "paper") {
				tie(); compPaper()
			} else { lose(); compScissors() };
	});

	$(".scissors").click(function(){
		CompsChoice();
			if (computerChoice === "rock") {
				lose(); compRock()
			} else if (computerChoice === "paper") {
				win(); compPaper()
			} else { tie(); compScissors() };
	});

// Functions for the win/lose/tie text
function win(){
	$(".answer").text("You Win!");
	num_wins += 1;
	score();
	animate();
};

function lose(){
	$(".answer").text("You Lose!");
	num_losses += 1;
	score();
	animate();
};

function tie(){
	$(".answer").text("You Tie!");
	num_ties += 1;
	score();
	animate();
};

// Computer choice is highlighted in red for 1 second
function compRock(){
	$(".rock").css("background-color","red");
	setInterval(function(){
		$(".rock").css("background-color", "")
	}, 1000);
};

function compPaper(){
	$(".paper").css("background-color","red");
	setInterval(function(){
		$(".paper").css("background-color", "")
	}, 1000);
};

function compScissors(){
	$(".scissors").css("background-color","red");
	setInterval(function(){
		$(".scissors").css("background-color", "")
	}, 1000);
};

// Reset button
$("button").click(function(){
	num_wins = 0;
	num_losses = 0;
	num_ties = 0;
	score();
});

// Score adding
function score(){
	document.getElementById("num_wins").innerHTML= num_wins;
	document.getElementById("num_losses").innerHTML= num_losses;
	document.getElementById("num_ties").innerHTML= num_ties;
};

// Function for the answer animation
function animate(){
	$(".answer").addClass("anim");
	setTimeout(function(){
		$(".answer").removeClass("anim");
	}, 1000);
};

// Make the Answer text animate onto the screen (spin and grow big)

//Idea: Same color squares with word and image inside. Box color changes via selection (blue)
// Box color also changes for comp choice (red), and for tie (green)
// Then add the winner at the bottom = this should be a function for win() lose() tie()

//Add in the score = counts your win, lose, tie

});

