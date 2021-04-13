var startButtonEl = document.querySelector("#start-button");
var theQuizEl = document.querySelector("#quiz");
var questionsEl = document.querySelector("#questions");
var answerOneEl = document.querySelector("#answer1");
var answerTwoEl = document.querySelector("#answer2");
var answerThreeEl = document.querySelector("#answer3");
var answerFourEl = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var quizsection = document.querySelector("#quiz-section");
var scoreTracker = document.querySelector("#score");

var score = 0;

//display presets
quizsection.style.display= "none";

//this is what happens when I press start button
//this calls a few functions  
startButtonEl.addEventListener("click", function(event) {
  event.preventDefault();
  startButtonEl.style.display= "none";
  console.log("start?");
  countdown();
  quizsection.style.display= "block";
  nextQuestion();

});

//timer attempt starts
var timeLeft = 60;
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft ;
      timeLeft--;
    } 
    else {
      timerEl.textContent = '';
      startButtonEl.style.display= "block";
      clearInterval(timeInterval);
      console.log("time is up sucker");
      quizsection.style.display= "none";
    }
  }, 1000);
}
//timer ends

//questions start here
  var questions = [
  { 
    question:'1.  Why so JavaScript and Java have similar name?',
    options1:'A.  JavaScript is a stripped-down version of Java',
    options2:"B.  JavaScript's syntax is loosely based on Java'",
    options3:'C.  They both originated on the island of Java',
    options4:'D.  None of the above',
    answer:"B.  JavaScript's syntax is loosely based on Java's",
 }, 
 { 
  question:'2.  When a user views a page containing a JavaScript program, which machine actually executes the script?',
  options1:"A.  The User's machine running a Web browser",
  options2:"B.   The Web server",
  options3:"C.  A central machine deep within Netscape's corporate offices",
  options4:"D.  None of the above",
  answer:"A.  The User's machine running a Web browser",
},
{ 
  question:'3.  ______ JavaScript is also called client-side JavaScript.',
  options1:"A.  Microsoft",
  options2:"B.  Navigator",
  options3:"C.  LiveWire",
  options4:"D.  Native",
  answer:"B.  Navigator",
},
{ 
  question:"4.  __________ JavaScript is also called server-side JavaScript.",
  options1:"A.  Microsoft",
  options2:"B.   Navigator",
  options3:"C.  LiveWire",
  options4:"D.  Native",
  answer:"C.  LiveWire",
},
{ 
  question:"5.  What are variables used for in JavaScript Programs?",
  options1:"A.  Storing numbers, dates, or other values",
  options2:"B.   Varying randomly",
  options3:"C.  Causing high-school algebra flashbacks",
  options4:"D.  None of the above",
  answer:"A.  Storing numbers, dates, or other values",
},
{ 
  question:"6.  _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
  options1:"A.  Client-side",
  options2:"B.   Server-side",
  options3:"C.  Local",
  options4:"D.  Native",
  answer:"A.  Client-side",
},
{ 
  question:"7.  Which of the following can't be done with client-side JavaScript?",
  options1:"A.  Validating a form",
  options2:"B.   Sending a form's contents by email",
  options3:"C.  Storing the form's contents to a database file on the server",
  options4:"D.  None of the above",
  answer:"C.  Storing the form's contents to a database file on the server",
},
{ 
  question:"8.  Which of the following are capabilities of functions in JavaScript?",
  options1:"A.  Return a value",
  options2:"B.   Accept parameters and Return a value",
  options3:"C.  Accept parameters",
  options4:"D.  None of the above",
  answer:"C.  Accept parameters",
},
{ 
  question:"9.  Which of the following is not a valid JavaScript variable name?",
  options1:"A.  2names",
  options2:"B.   _first_and_last_names",
  options3:"C.  FirstAndLast",
  options4:"D.  None of the above",
  answer:"A.  2names",
},
{ 
  question:"10.  How does JavaScript store dates in a date object?",
  options1:"A.  The number of milliseconds since January 1st, 1970",
  options2:"B.   The number of days since January 1st, 1900",
  options3:"C.  The number of seconds since Netscape's public stock offering.",
  options4:"D.  None of the above",
  answer:"A.  The number of milliseconds since January 1st, 1970",
}
]
//questions end here
// answer and question Index
var qIndex = 0;
var answerIndex = 0;

// funtion to change the questions
function nextQuestion(){
  questionsEl.textContent = questions[qIndex].question;
 answerOneEl.textContent = questions[qIndex].options1;
 answerTwoEl.textContent =  questions[qIndex].options2;
 answerThreeEl.textContent =  questions[qIndex].options3;
 answerFourEl.textContent = questions[qIndex].options4;
}


answerOneEl.addEventListener("click", function(event){
  if (questions[qIndex].answer === questions[qIndex].options1){
    score++;
    scoreTracker.textContent = "Score: " + score ;
  }else{
    timeLeft = timeLeft-10 ;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
answerTwoEl.addEventListener("click", function(event){
  if (questions[qIndex].answer === questions[qIndex].options2){
    score++;
    scoreTracker.textContent = "Score: " + score ;
  }else{
    timeLeft = timeLeft-10 ;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
answerThreeEl.addEventListener("click", function(event){
  if (questions[qIndex].answer === questions[qIndex].options3){
    score++;
    scoreTracker.textContent = "Score: " + score ;
  }else{
    timeLeft = timeLeft-10 ;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
answerFourEl.addEventListener("click", function(event){
  if (questions[qIndex].answer === questions[qIndex].options4){
    score++;
    scoreTracker.textContent = "Score: " + score ;
  }else{
    timeLeft = timeLeft-10 ;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
 