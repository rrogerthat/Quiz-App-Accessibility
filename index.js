'use strict';

const quizStorage = [
	{
		question: "1. Which is considered the most fearless animal?",
		ans1: "Elephant", 
		ans2: "Wolf",
		ans3: "Cougar",
		ans4: "Honey Badger", //correct answer
		answer: 4,
		correct: "Correct! The honey badger has been called the world's most fearless animal because it doesn't hesitate to attack animals much larger than itself.",
		incorrect: "Incorrect! Answer: Honey badger. The honey badger has been called the world's most fearless animal because it doesn't hesitate to attack animals much larger than itself.",
		img: "http://media.breitbart.com/media/2015/05/honey-badger-Mat%C4%9Bj-Ba%C5%A5ha.jpg"
	},
	{
		question: "2. Which is the fastest animal in the world?",
		ans1: "Peregrine falcon", //correct answer
		ans2: "Cheetah",
		ans3: "Spine-tail swift",
		ans4: "Flying fish",
		answer: 1,
		correct: "Correct! When diving to catch its prey, the peregrine falcon can reach speeds of up to 220 mph.",
		incorrect: "Incorrect! Answer: Peregrine falcon. When diving to catch its prey, the peregrine falcon can reach speeds of up to 220 mph.",
		img: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Birds/bird_peregrine-falcon_600x300.ashx"
	},
	{
		question: "3. How many hearts does an octopus have?",
		ans1: "1",
		ans2: "3", //correct answer
		ans3: "12",
		ans4: "15",
		answer: 2, //put in array and have answer index as "1"
		correct: "Correct! An octopus has three hearts, nine brains, blue blood, and eight arms.",
		incorrect: "Incorrect! Answer: 3. An octopus has three hearts, nine brains, and blue blood.",
		img: "https://pixel.nymag.com/imgs/daily/science/2016/12/19/19-octopus.w710.h473.jpg"
	},
	{
		question: "4. What animal has the loudest noise?",
		ans1: "Hyena",
		ans2: "Sperm whale", //correct answer
		ans3: "Elephant",
		ans4: "Lion",
		answer: 2,
		correct: "Correct! A sperm whale can reach noise level of up to 230 decibels(dB) as compared to a jet that can reach 140 dB.",
		incorrect: "Incorrect! Answer: Sperm whale. A sperm whale can reach noise level of up to 230 decibels(dB) as compared to a jet that can reach 140 dB.",
		img: "http://www.abc.net.au/news/image/8683426-3x2-940x627.jpg"
	},
	{
		question: "5. How many teeth do white sharks have?",
		ans1: "630",
		ans2: "46",
		ans3: "300", //correct answer
		ans4: "120",
		answer: 3,
		correct: "Correct! Great white sharks have about 300 teeth, arranged in many rows.",
		incorrect: "Incorrect! Answer: 300. Great white sharks have about 300 teeth, arranged in many rows.",
		img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/a9/59/e4/sharks-of-gansbaai.jpg"
	},
	{
		question: "6. Which of these animals have sweat glands in their nose?",
		ans1: "Cows", //correct answer
		ans2: "Dogs",
		ans3: "Chickens",
		ans4: "Horses",
		answer: 1,
		correct: "Correct! Cows use their wet nose as a cooling system.",
		incorrect: "Incorrect! Answer: Cows. Cows use their wet nose as a cooling system.",
		img: "http://i.dailymail.co.uk/i/pix/2011/07/04/article-2011124-0A949474000005DC-723_468x302.jpg"
	},
	{
		question: "7. What shape are the pupils of a goat?",
		ans1: "Triangle",
		ans2: "Circle",
		ans3: "Oval",
		ans4: "Rectangle", //correct answer
		answer: 4,
		correct: "Correct! Goats have rectangular pupils. This unique shape helps goats see 280 degrees around their bodies.",
		incorrect: "Incorrect! Answer: Rectangle. Goats have rectangular pupils. This unique shape helps goats see 280 degrees around their bodies.",
		img: "http://goatspots.com/wp-content/uploads/2013/08/marzipan-upclose-eating.jpg"
	},
	{
		question: "8. How many liters can a camel drink at a time?",
		ans1: "50", //correct answer
		ans2: "100",
		ans3: "5",
		ans4: "300",
		answer: 1,
		correct: "Correct! When camels find water, they will drink as much as possible. They can drink up to 50 gallons of water at once.",
		incorrect: "Incorrect! Answer: 50. When camels find water, they will drink as much as possible. They can drink up to 50 gallons of water at once.",
		img: "http://animals.sandiegozoo.org/sites/default/files/inline-images/camel_dromedary.jpg"
	},
	{
		question: "9. Which is the longest snake?",
		ans1: "Anaconda",
		ans2: "Reticulated python", //correct answer
		ans3: "Green tree snake",
		ans4: "Corn snake",
		answer: 2,
		correct: "Correct! Reticulated pythons grow up to 10 meters long, making them the longest snakes in the world.",
		incorrect: "Incorrect! Answer: Reticulated python. Reticulated pythons grow up to 10 meters long, making them the longest snakes in the world.",
		img: "https://i.ytimg.com/vi/78_7aR9wnmY/maxresdefault.jpg"
	},
	{
		question: "10. Which animal can go without sleep for long periods of time?",
		ans1: "Turtle",
		ans2: "Dolphin",
		ans3: "Bullfrog", //correct answer
		ans4: "Elephant",
		answer: 3,
		correct: "Correct! Bullfrogs are thought to be animals that can survive without sleeping for months at a time. While they shut their eyes and go on to rest, they remain alert during these periods.",
		incorrect: "Incorrect! Answer: Bullfrog. Bullfrogs are thought to be animals that can survive without sleeping for months. While they shut their eyes and go on to rest, they remain alert during these periods.",
		img: "https://i.pinimg.com/originals/4d/2a/82/4d2a824f27e56b54f068105c0680a0a0.jpg"
	}
];

let currentIndex = 0; 
//increment by 1 everytime next is clicked to go on to next question in array.

let score = 0; //keep track of score for answers that are correct.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function generateQuizItem(item, itemIndex, template) {  //do we need to have template parameter?
	//generate question template by applying template in function  to each object in array through use of .map method.
	return `<fieldset name="answer-list">
	        <legend class="question" data-item-index="${itemIndex}">${item.question}</legend>
				<div class="select-one">  
				<input type="radio" name="single-answer" id="ans-1" value="1" required><label for="ans-1">${item.ans1}</label><br>
				<input type="radio" name="single-answer" id="ans-2" value="2"><label for="ans-2">${item.ans2}</label><br>
				<input type="radio" name="single-answer" id="ans-3" value="3"><label for="ans-3">${item.ans3}</label><br>
				<input type="radio" name="single-answer" id="ans-4" value="4"><label for="ans-4">${item.ans4}</label>
				</div>
			</fieldset>
				<button type="submit" class="give-answer">Submit</button>`;
}				//use same name attr so only one can be chosen in multiple choice
				//index of each object in array is set here under 'itemIndex'?	
				//BLOCK OF CODE ABOVE would be reduced to an iteration when putting answers in an ARRAY.
				
function generateQuizQuest(quizStorage) {
	//Displays each of the quiz questions one at a time.
	//Will return a new array of objects now containing each question.
	const items = quizStorage.map((item, index) => generateQuizItem(item, index));
	return items;
} 

function renderQuizQuest() {
	//When Start Quiz button is clicked, first quiz question is displayed.
	const singleQuest = generateQuizQuest(quizStorage); //an array of questions
	$(".startthis").click(function() {
	  $(".caption").empty();
		$(".js-main").html(singleQuest[currentIndex]);   
		//Use .html just in case you need to replace previous content in <ul>.
		$(".show-progress").html(renderFooterProgress(currentIndex)); //Footer
		console.log("`renderQuizQuest` ran");
	});	
	
}

function renderFooterProgress(currentIndex) {
  //Shows what question you currently are on.
  if (currentIndex < quizStorage.length) {
  return `Question ${currentIndex+1} of ${quizStorage.length}`;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function quizQuestionSubmit() {
	//When answer is submitted for quiz question, feedback section is displayed.
	
	//Use form submit as the event handler when form is submitted so a required answer is needed before next question. This will not work with the click event handler on the submit button since that event is seperate from the form being submitted.
	$(".chooseform").on("submit", function(event) {
	  event.preventDefault();  //Disable post to server when submitting answers.
	  //To get the value of the currently selected radio button to compare to value in answer in the array. If matched, correct answer.
	  //Since already on form through this function, can just reference button directly. Since comparing numbers use just '=='.
	  if ($('input[name="single-answer"]:checked').val() == quizStorage[currentIndex].answer) {
	      $(".js-main").html(`<img src=\"${quizStorage[currentIndex].img}\" alt=\"Animal pic\"><p>${quizStorage[currentIndex].correct}</p>`);
	      $(".js-main p").append("<button type=\"button\" id=\"nextone\">Next</button>"); 
	  }
	  else if ($('input[name="single-answer"]:checked').val() !== quizStorage[currentIndex].answer) {
	      $(".js-main").html(`<img src=\"${quizStorage[currentIndex].img}\" alt=\"Animal pic\"><p>${quizStorage[currentIndex].incorrect}</p>`);
	      $(".js-main p").append("<button type=\"button\" id=\"nextone\">Next</button>"); 
	  }
	  console.log("Question rendered");
	});
}

function feedbackPageSubmit() {
	//When clicking on next after feedback page is displayed, move on to next question or to final page if no more questions.
  $(".js-main").on("click", "#nextone", function(event) {
    currentIndex++; //Changes the value of this variable globally.
    //.html will replace previous content inside <main>.
    $(".js-main").html(generateQuizQuest(quizStorage)[currentIndex]); 
    $(".show-progress").html(renderFooterProgress(currentIndex)); //Footer
  	});
  }

function trackCurrentScore() {
  //Track and display your current score.
  $(".js-main").on("click", ".give-answer", function(event) {
     if ($('input[name="single-answer"]:checked').val() == quizStorage[currentIndex].answer) {
       score++;
        $(".currentScore").html(`Score: ${score} of ${quizStorage.length} Correct`); 
     }
      else if ($('input[name="single-answer"]:checked').val() !== quizStorage[currentIndex].answer) {
        $(".currentScore").html(`Score: ${score} of ${quizStorage.length} Correct`); 
     }
  });
}

function renderFinalPage() {
	//Displays final page after finishing quiz which shows the score results.
	$(".js-main").on("click", "#nextone", function(event) {
	  if(currentIndex == 10) { //index 10 is not part of the array.
    	$(".ending").html(`<b>FINISHED!</b> Score: ${score} out of ${quizStorage.length} correct.<br><br> Hope you had fun learning fun facts about animals! To retake the quiz, click the restart button below.<br><button type="reset" id="restart">Restart</button>`);
    	$(".js-main").empty(); //To just show final page quiz results.
    	$(".currentScore").empty();
    	$(".show-progress").empty();
    	console.log("`renderFinalPage` ran");
    	}
	});
}

function restartQuiz() {
  //To go back to starting page.
  $(".ending").on("click", "#restart", function(event) {
    location.reload();    //try coding on your own 
    console.log("`restartQuiz` ran");
  });
}

//Callback function when page loads.
function startQuiz() {
	renderQuizQuest();
	generateQuizQuest(quizStorage);   //make sure to put parameters here too
	quizQuestionSubmit();
	feedbackPageSubmit();
	trackCurrentScore();
	renderFinalPage();
	restartQuiz();
}

//When page (HTML) finishes loading, call this function to display front page.
$(startQuiz);