//Test comment!!!!!!! --- 

$(document).ready(function(){
  $("#banner").append("<img id='banner' src = 'assets/images/149016006714110.png'>")

  beginLife();
})


//Some things the user will read after each question.
var message = {
  correct: "That's not incorrect!",
  incorrect: "That is incorrect!",
  time: "Sorry, out of time! You're probably dead."
};

//question & answer array-------------------------------------------
var questions = [
    {
    //1
    ques: "What do you do when the Glthanix comes a knockin at your slidoport?",  
    ans: ["A. Grab the ZX-95-Q and blast away!", "B. Kiss your GOOD times GOOD bye.", "C. You don't need to do nothin'. That slidoport will hold.", "D. Exit through the Viewport-900 and make way to the nearest exotemple."],
    correct: 0
    },
    {
    //2
    ques: "While drunk in Inner Qlagmian, you found a chunk of pure lumite-12. Should you...",
    ans: ["A. Stuff it in your chemise and run like fuck?", "B. Report the lost item to the athorities?", "C. Call the Grunion-Squad!?", "D. Dance the night away and buy drinks for lovely Qlagmianans?"],
    correct: 2
    },
    {
    //3
    ques: "Oh shit! The Cragotons just landed in the city! What should you do?",
    ans: ["A. Grab your Thwanex-turner and kill kill kill.", "B. Call the Grunion-Squad!?", "C. Hold fast. Those Cragotons won't know what hit 'em.", "D. Put some pep in your step. It's gonna be a long night."],
    correct: 3
    },
    {
    //4
    ques: "Your cryotinulatrix is growing a strange red mold. What is the best cleaning product to use?",
    ans: ["A. Oxcophylant Ultra", "B. Amonia", "C. Quinitrex Blue Compound and trantin solution", "D. a smidgen of Marlax juice"],
    correct: 1
    },
    {
    //5
    ques: "You're having a fancy meal with the king of Florthop'g and he asks, \"Gammatag no kit'rganth?\" How should you respond?",
    ans: ["A. Lo'franithin, thanks.", "B. Wahoklateront and the empire!", "C. Conks!", "D. I don't think that's how things were meant to go."],
    correct: 1
    }
];




//Set Global Variables---------------------------------------

var currentQuestion;
var numCorrect;
var numWrong;
var questionCounter = 0


//New game conditions function--------------------------------
function beginLife(){
  $("#questionArea").empty()
  $("#messageArea").empty()
  $("#answerArea").empty()
  currentQuestion = 0;
  numCorrect = 0;
  numWrong = 0;
  addQuestion();
}

//timer----------------------------------------------------



//add question & answers to page-----------------------------------------
var answerSelection
function addQuestion(){
  $("#answerArea").empty();
  $("#questionArea").html(questions[currentQuestion].ques);
  for (i=0; i<4; i++){
    var answerChoice = $("<div>")
    answerChoice.text(questions[currentQuestion].ans[i])
    answerChoice.addClass("yourChoice")
    answerChoice.attr({'data-zindex': i });
    $("#answerArea").append(answerChoice)

  }
  
  timerStart() 
  //Set Onclick for answer divs------------------------------------------
  $('.yourChoice').on('click',function(){
    answerSelection = $(this).data('zindex');
    clearInterval(timer);
    answer();
  });
}


var seconds
var timeOut = true;

function timerStart(){
    seconds = 15
    timer = setInterval(decrement, 1000);
}

//setting for timer decrease
function decrement(){
  $("#timerArea").html("Time remaining: " + seconds)
  seconds--
  if (seconds < 0){
  $("#messageArea").html(message.time);
  clearInterval(timer);
  timeOut = false
  answer();
  }
}


//answer display
function answer(){
  $('.yourChoice').empty();
  $("#questionArea").empty();
  var ansIndex = questions[currentQuestion].correct
  var ansText = questions[currentQuestion].ans[questions[currentQuestion].ans];
  
  if((answerSelection == ansIndex) && (timeOut==true)){
    $("#answerArea").html(message.correct)  
    numCorrect++
  }
   else if ((answerSelection != ansIndex) && (timeOut==true)){
    $("#answerArea").html(message.incorrect)
    numWrong++
  }
  else{
    $("#answerArea").html(message.incorrect)
    numWrong++
    timeOut = false
  }
  currentQuestion++
  questionCounter++
  questionTally()
    

};

//end game conditions ----- keept track of current question
function questionTally(){

  if (questionCounter === questions.length){
    $("#messageArea").html("There is no win or lose, just continued existence in Florthop'g.")
    $("#questionArea").html("You got " + numCorrect + " not so wrong...");
    $("#answerArea").html("You got " + numWrong + " very incorrect.")
  }
  else{
    $("#messageArea").empty();
    setTimeout(addQuestion, 2000);
  }

}

//reset needs button

// Timer
// Set the date we're counting down to
var countDownDate = new Date("March 22, 2017 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

