var selectAnswer = document.getElementById('section-one-content');
var answerType = document.getElementById('answer-type');
var countdown = document.getElementById('countdown');
var yourScore = document.getElementById('your-score');
var scoreResult= document.getElementById('result'); 
var modalOverlay = document.querySelector('.modal-overlay');
var closeBtn = document.getElementById('close-btn');
var checkScore = document.getElementById('checkScore');
var playAgain = document.getElementById('play-again');
var score = 0;
var timer = 35;
var objectId = 0;
var scoreArray = [];

// creating a question object with different answers
var questions = [
  {
    question : 'What is HTML?',
    answerOne : 'HTML stands for Hyper Text Markup Language',
    answerTwo : 'HTML is a programing language used to style and layout web pages',
    answerThree :'HTML is a JavaScript freamwork',
    answerFour : 'None of the above',

    rightAnswer : 'HTML stands for Hyper Text Markup Language'
  },

  {
    question : 'Whats the main use of CSS?',
    answerOne : 'Display Content in a web-page',
    answerTwo : 'style and layout web pages',
    answerThree :'Css will alow us to add click events to buttons',
    answerFour : 'None of the above',

    rightAnswer: 'style and layout web pages'
  },

  {
    question : 'what is JavaScript?',
    answerOne : 'A programing Language',
    answerTwo : 'A soccer place',
    answerThree : 'A restaurant',
    answerFour : 'A sport',

    rightAnswer: 'A programing Language'
  },

  {
    question : 'Why so JavaScript and Java similar name?',
    answerOne : 'JavaScript is a stripped-down version of java',
    answerTwo : "JavaScript's syntax is looseley based on java's",
    answerThree : 'They both originated on the island of java',
    answerFour : 'None of the above',

    rightAnswer: "JavaScript's syntax is looseley based on java's"
  },

  {
    question : '___ JavaScript is also called client-side JavaScript?',
    answerOne : 'Microsoft',
    answerTwo : 'Navigator',
    answerThree :'LiveWire',
    answerFour : 'Native',

    rightAnswer: 'LiveWire'
  },

  {
    question : 'What are variables used for in javaScript programs?',
    answerOne : 'Storing numbers, dates, or other values',
    answerTwo : 'Varying randomly',
    answerThree :'Causing hight-school algebra flashbacks',
    answerFour : 'None of the above',

    rightAnswer: 'What are variables used for in javaScript programs'
  },

]

//set curent item to 0 and it will decrease everytime the answer will be right
let currentItem = 0;

//for loop to display all the questions
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

  if(timer <= 0){ // I added the <  because whenever i check the wrong answer, the timer might skip the 0 and go to the negative number and my modalOverlay wont show
    //clear Interval whenever timer will be 0, and 
    clearInterval(setTime);
    // this will go to the score section whenever the score will be equal to 0
    modalOverlay.style.visibility = 'visible';
    var scoreText = document.createElement ('p');
    scoreText.className = 'score-text';
    scoreText.innerHTML = `${score} / ${questions.length}`;
    checkScore.appendChild(scoreText);
    //creat a play again button
    var buttonPlay = document.createElement ('button');
    buttonPlay.className = 'btn-play';
    buttonPlay.style.padding = '10px';
    buttonPlay.textContent = 'Play Again'
    playAgain.appendChild(buttonPlay);

  }
}

 // Change the content of the questions and answers by going trough the array objects and that with calling the showQuestion function
 var answerQuestions = function(e){
    if (e.target.textContent !== questions[currentItem].rightAnswer){
      //decrease the timer by 5s
      timer = timer - 5;
      //display a wrong text with a red background color 
      answerType.innerHTML = 'wrong';
      answerType.style.fontSize = '32px';
      answerType.style.backgroundColor = 'red';
      // display the class that we did hide in our css
      answerType.style.display = 'block';
     }
     else{
      //display a wrong text with a green background color 
      score++;
      answerType.innerHTML = 'correct';
      answerType.style.fontSize = '32px';
      answerType.style.backgroundColor = 'green';
      // display the class that we did hide in our css
      answerType.style.display = 'block';
     }
    
    if(objectId === questions.length){
      timer = 0;
          
      //set inital to local storage
      scoreArray.push(score);
      localStorage.setItem('score', JSON.stringify (scoreArray));
      scoreArray = [];

      } else {
      currentItem++;
      showQuestion();
      }
 }


// get score result and this whenenver you click the score heading to check your score 
  var getScoreResult = function(){
    modalOverlay.style.visibility = 'visible';
    var scoreLs = getScoreFromLs();
    yourScore.textContent = `your score ${scoreLs}`
  }

// close the score section whenever you click the red button
  var closeScoreSection = function (){
    modalOverlay.style.visibility = 'hidden';
  }

//play again function
  var anotherRound = function() {
    window.location.reload();
  }

// get score form LS whenever you reload the page 
var getScoreFromLs = function(){
  var scoreArrayFromLs = localStorage.getItem('score');
  var scoreArrayLs = JSON.parse(scoreArrayFromLs)
  return scoreArrayLs[0];
}



//event listeners
playAgain.addEventListener('click', anotherRound); // I set this function to reload the page even that i set a http path on the HTML page 
scoreResult.addEventListener('click', getScoreResult);
closeBtn.addEventListener('click', closeScoreSection);
selectAnswer.addEventListener('click', answerQuestions);
window.addEventListener("DOMContentLoaded", showQuestion);
window.addEventListener("DOMContentLoaded", getScoreFromLs);