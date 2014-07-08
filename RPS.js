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
	alert("The computer chose: " + computerChoice)
	};

// recognizes when items are clicked (user choice + winner logic)
	$(".rock").click(function(){
		alert("Rock!");
		CompsChoice();
			if (computerChoice === "rock") {
				alert("TIE!"); tie(); compRock()
			} else if (computerChoice === "paper") {
				alert("LOSE!"); lose(); compPaper()
			} else { alert("WINNER!"); win(); compScissors() };
	});

	$(".paper").click(function(){
		alert("Paper!");
		CompsChoice();
			if (computerChoice === "rock") {
				alert("WINNER!"); win(); compRock()
			} else if (computerChoice === "paper") {
				alert("TIE!"); tie(); compPaper()
			} else { alert("LOSE!"); lose(); compScissors() };
	});

	$(".scissors").click(function(){
		alert("Scissors!");
		CompsChoice();
			if (computerChoice === "rock") {
				alert("LOSE!"); lose(); compRock()
			} else if (computerChoice === "paper") {
				alert("WINNER!"), win(); compPaper()
			} else { alert("TIE!"), tie(); compScissors() };
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

// Need to add the Winner output (How does it show on screen? CSS maybe = addClass)
// Just need to switch out for the alert functions

//Idea: Same color squares with word and image inside. Box color changes via selection (blue)
// Box color also changes for comp choice (red), and for tie (green)
// Then add the winner at the bottom = this should be a function for win() lose() tie()

});

