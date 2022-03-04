var btn = document.getElementById('section-one-content');
var span = document.getElementById('show-answer');
var countdown = document.getElementById('countdown');
var yourScore = document.getElementById('your-score');
var scoreResult= document.getElementById('result'); 
var modalOverlay = document.querySelector('.modal-overlay');
var closeBtn = document.getElementById('close-btn');
var checkScore = document.getElementById('checkScore');
var playAgain = document.getElementById('play-again');
var score = 0;
var timer =5;
var objectId = 0;
var scoreArray = [];

// creating a question object with different answers
var questions = [
  {
    question : 'How many states in the USA',
    answerOne : 'fifty',
    answerTwo : 50,
    answerThree : 43,
    answerFour : 65,

    rightAnswer : 'fifty'
  },
  {
    question : 'what is JavaScript',
    answerOne : 'A programing Language',
    answerTwo : 'A soccer place',
    answerThree : 'A restaurant',
    answerFour : 'A sport',

    rightAnswer: 'A programing Language'
  },
  {
    question : 'What is the biggest state in the USA',
    answerOne : 'Texas',
    answerTwo : 'Ohio',
    answerThree : 'Alaska',
    answerFour : 'Califorian',

    rightAnswer: 'Alaska'
  },
  {
    question : 'where is algeria located at',
    answerOne : 'Africa',
    answerTwo : 'Asia',
    answerThree :'europe',
    answerFour : 'IDK',

    rightAnswer: 'Africa'
  },

]

let currentItem = 0;

for(let i=0 ; i<questions.length; i++ ){
  function showQuestion(){
    item = questions[currentItem];  
    question.textContent = item.question;
    answerOne.textContent = item.answerOne;
    answerTwo.textContent = item.answerTwo;
    answerThree.textContent = item.answerThree;
    answerFour.textContent = item.answerFour;


    //set an id of every object
    objectId++;
   }
}

//set timer on the updateContDown function.
var setTime = setInterval (updateCountDown, 1000);
function updateCountDown(){
  countdown.innerHTML = timer;
  timer--;

  if(timer <= 0){ // i added the < because whenever i check the wrong answer, the timer might skip the 0 and go to the negative number and my modalOverlay wont show
    //clear Interval whenever timer will be 0
    clearInterval(setTime);
    // this will go to the score section whenever the score will be equal to 0
    modalOverlay.style.visibility = 'visible';
    var scoreText = document.createElement ('p');
    scoreText.className = 'score-text';
    scoreText.innerHTML = currentItem;
    checkScore.appendChild(scoreText);
    //creat a play again button
    var buttonPlay = document.createElement ('button');
    buttonPlay.className = 'btn-play';
    buttonPlay.style.padding = '10px';
    buttonPlay.textContent = 'Play Again'
    playAgain.appendChild(buttonPlay);

    
    //set inital to local storage
    scoreArray.push(currentItem);
    localStorage.setItem('score', JSON.stringify (scoreArray));

    var getScoreN =JSON.parse(localStorage.names);
    localStorage.getItem(getScoreN);
  }


  // if (?? === questions.length){
  //  need to reset my timer
  // }

}

 // Change the content of the questions and answers by going trough the array objects 
 var answerQuestions = function(e){
    // if thecurrentItem is false then increament it by one
    rightAnswer = questions[currentItem].rightAnswer
    if (e.target.textContent !== questions[currentItem].rightAnswer){
      //decrease the timer by 5s
      timer = timer - 5;
      //display a wrong text with a red background color 
      span.innerHTML = 'wrong';
      span.style.fontSize = '32px';
      span.style.backgroundColor = 'red';
      // display the class that we did hide in our css
      span.style.display = 'block';
     }
     else{
      //display a wrong text with a green background color 
      score++;
      yourScoreValue = yourScore;
      span.innerHTML = 'correct';
      span.style.fontSize = '32px';
      span.style.backgroundColor = 'green';
      // display the class that we did hide in our css
      span.style.display = 'block';
     }
    
    currentItem++;
    showQuestion();
 }


// get score result and this whenenver you click the score heading to check your score 
  var getScoreResult = function(){
    modalOverlay.style.visibility = 'visible';
  }

  var closeScoreSection = function (){
    modalOverlay.style.visibility = 'hidden';
  }


//play again function
  var anotherRound = function() {
    window.location.reload();
  }



//event listeners
playAgain.addEventListener('click', anotherRound); // I set this function to reload the page even that i set a http path on the HTML page 
scoreResult.addEventListener('click', getScoreResult);
closeBtn.addEventListener('click', closeScoreSection);
btn.addEventListener('click', answerQuestions);
window.addEventListener("DOMContentLoaded", showQuestion);