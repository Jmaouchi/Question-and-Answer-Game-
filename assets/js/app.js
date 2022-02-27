var btn = document.getElementById('btn');

// creating a question object with different answers
var questions = [
  {
    question : 'How many states in the USA',
    answerOne : 'one',
    answerTwo : 'two',
    answerThree : 'three',
    answerFour : 'four',
  },
  {
    question : 'what is JavaScript',
    answerOne : 'A programing Language',
    answerTwo : 'A soccer place',
    answerThree : 'A restaurant',
    answerFour : 'A sport',
  },
  {
    question : 'What is the biggest state in the USA',
    answerOne : 'Texas',
    answerTwo : 'Ohio',
    answerThree : 'Alaska',
    answerFour : 'Califorian',
  },
  {
    question : 'where is algeria located at',
    answerOne : 'Africa',
    answerTwo : 'Asia',
    answerThree :'europe',
    answerFour : 'IDK',
  }
]

let currentItem = 0;
  // add a show question to the window by default,
 function showQuestion(){
  item = questions[currentItem];  
  console.log(item); 
  question.textContent = item.question;
  answerOne.textContent = item.answerOne;
  answerTwo.textContent = item.answerTwo;
  answerThree.textContent = item.answerThree;
  answerFour.textContent = item.answerFour;
 }

 // Change the content of the questions and answers by going trough the array objects 
 btn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > questions.length-1){
      currentItem = 0;
  }
  showQuestion();
})
 
window.addEventListener("DOMContentLoaded", showQuestion);


// adding a content 