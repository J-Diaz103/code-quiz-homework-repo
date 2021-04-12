var startButtonEl = document.querySelector("#start-button");
var theQuizEl = document.querySelector("#quiz");
var questionsEl = document.querySelector("#questions");
var answerOneEl = document.querySelector("#answer1");
var answerTwoEl = document.querySelector("#answer2");
var answerThreeEl = document.querySelector("#answer3");
var answerFourEl = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var quizsection = document.querySelector("#quiz-section"); 
var score = 0;
var incorrect = 0;

//display presets
//quizsection.style.display= "none";

//this is what happens when I press star 
startButtonEl.addEventListener("click", function(event) {
  event.preventDefault();
  startButtonEl.style.display= "none";
  console.log("start?");
  countdown();
  quizsection.style.display= "block";
  nextQuestion();

});

//timer attempt starts
var timeLeft = 25;
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
    }
  }, 1000);
}
//timer ends

//questions start here
  var questions = [
  { 
    question:'what is 1+1',
    options1:'1',
    options2:'2',
    options3:'3',
    options4:'4',
    answer:"2",
 }, 
 { 
  question:'What is 2+3',
  options1:"5",
  options2:"2",
  options3:"3",
  options4:"4",
  answer:"5",
},
{ 
  question:'What is 3+3',
  options1:"5",
  options2:"2",
  options3:"6",
  options4:"4",
  answer:"6",
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
  console.log("one")
  if (questions[qIndex].answer[answerIndex] === questions[qIndex].options2[answerIndex]){
    console.log("correct");
    score++;
    console.log(score);
  }else{
    timeLeft-=10;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
answerTwoEl.addEventListener("click", function(event){
  console.log("this is working2")
  if (questions[qIndex].answer[answerIndex] === questions[qIndex].options2[answerIndex]){
    console.log("correct");
    score++;
    console.log(score);
  }else{
    timeLeft-=5;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
answerThreeEl.addEventListener("click", function(event){
  console.log("this is working3")
  if (questions[qIndex].answer[answerIndex] === questions[qIndex].options2[answerIndex]){
    console.log("correct");
    score++;
    console.log(score);
  }else{
    timeLeft-=2;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
})
answerFourEl.addEventListener("click", function(event){
  if (questions[qIndex].answer[answerIndex] === questions[qIndex].options2[answerIndex]){
    console.log("correct");
    score++;
    console.log(score);
  }else {
    timeLeft-=2;
  }
  qIndex++;
  answerIndex++;
  if(qIndex<questions.length){
    nextQuestion();
  }
  console.log("this is working4")
})
 
//answerFourEl.textContent = questions[questionIndex].options[3];

//first step will be to have a question appear when the stat button  is pressed


//var questionsEl = document.querySelector("#questions");