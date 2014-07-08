$(document).ready(function(){

//Global variable
window.computerChoice = "";

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

// recognizes when items are clicked (user choice + winner logic)
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

function win(){
	$(".answer").text("You Win!")
};

function lose(){
	$(".answer").text("You Lose!")
};

function tie(){
	$(".answer").text("You Tie!")
};

function compRock(){
	$(".rock").css("background-color","red");
	setInterval(function(){
		$(".rock").css("background-color", "")
	}, 2000);
};

function compPaper(){
	$(".paper").css("background-color","red");
	setInterval(function(){
		$(".paper").css("background-color", "")
	}, 2000);
};

function compScissors(){
	$(".scissors").css("background-color","red");
	setInterval(function(){
		$(".scissors").css("background-color", "")
	}, 2000);
};

// Need to add the Winner output (How does it show on screen? CSS maybe = addClass)
// Just need to switch out for the alert functions

//Idea: Same color squares with word and image inside. Box color changes via selection (blue)
// Box color also changes for comp choice (red), and for tie (green)
// Then add the winner at the bottom = this should be a function for win() lose() tie()

//Add in the score = counts your win, lose, tie

});

