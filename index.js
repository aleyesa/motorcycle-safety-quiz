// 'use strict';
//counters used to get next question, update scoreCounter, and used to check how many questions done.
let questionIndexCounter = 0;
let scoreCounter = 0;
let userCorrect;

//questionsAnswers will be an array of objects where i store all the information about the questions and answers.
//I will have 6 keys called question, a1, a2, a3, a4, and correct.
const questionsAnswers = [
  {
    //Question 1
    question: 'Q1: What are the four preparations you should do when preparing to ride a motorcycle?',
    a1: ['a)\n\
    1. You fit the motorcycle.(answer)\n\
    2. You inspect the motorcycle.\n\
    3. You use proper protective riding gear.\n\
    4. You have a good mental attitude with safety as your priority.', {correct: 'correct'}],
    a2: ['b\n\
    1. You look cool on a motorcycle.\n\
    2. You inspect the motorcycle.\n\
    3. You use proper protective riding gear.\n\
    4. You have a good mental attitude with safety as your priority.', {correct: 'wrong'}],
    a3: ['c)\n\
    1. You fit the motorcycle.\n\
    2. You think that your motorcycle was good yesterday,\n\
    so you should be fine today without basic inspection.\n\
    3. You use proper protective riding gear.\n\
    4. You have a good mental attitude with safety as your priority.', {correct: 'wrong'}],
    a4: ['d)\n\
    1. You fit the motorcycle.\n\
    2. You inspect the motorcycle.\n\
    3. You use proper protective riding gear.\n\
    4. If you have no fear go right ahead.', {correct: 'wrong'}],
  },
  //Question 2
  {
    question: 'Q2: When finding the best fit for you, what are the two primary features you should consider?',
    a1: ['a) How cool it looks and the bigger the motorcycle, the better!', {correct: 'wrong'}],
    a2: ['b) If it catches everyones eyes and has a nice seat cushion.', {correct: 'wrong'}],
    a3: ['c) It should be a good price and look promising.', {correct: 'wrong'}],
    a4: ['d) Seat height and overall motorcycle size.(answer)', {correct: 'correct'}]
  },
  //Question 3
  {
    question: 'Q3: A quick an easy method to remember the major parts to inspect your motorcycle everytime you ride is called?',
    a1: ['a) T-CLOCS(answer)', {correct: 'correct'}],
    a2: ['b) A-CLOCS', {correct: 'wrong'}],
    a3: ['c) C-CLOCS ', {correct: 'wrong'}],
    a4: ['d) R-CLOCS', {correct: 'wrong'}]
  },
  //Question 4
  {
    question: 'Q4: A procedure called FINE-C is used as an engine pre-start routine, what does it stand for?',
    a1: ['a) Focus, Ignition, Neutral, Engine Cut-off Switch, Choke/Clutch(answer)', {correct: 'correct'}],
    a2: ['b) Fuel, Ignition, Neutral, Engine, Cut-off Switch, Choke/Clutch', {correct: 'wrong'}],
    a3: ['c) Fuel, Intuition, Neutral,  Engine, Cut-off Switch, Choke/Clutch', {correct: 'wrong'}],
    a4: ['d) Fuel, Ignition, Normal, Enginge, Cut-off Switch, Choke/Clutch', {correct: 'wrong'}]
  },
  //Question 5
  {
    question: 'Q5: In what steps and correct order should you consider when making a turn.',
    a1: ['a) Slow, Look, Press, and Roll.(answer)', {correct: 'correct'}],
    a2: ['b)  Roll, Press, Look, Slow.', {correct: 'wrong'}],
    a3: ['c)  Look, Press, Slow, Roll.', {correct: 'wrong'}],
    a4: ['d)  Roll, Look, Press, Slow.', {correct: 'wrong'}]
  },
  //Question 6
  {
    question: 'Q6: How much stopping power does a motorcycles front brakes provide?',
    a1: ['a) 50%', {correct: 'wrong'}],
    a2: ['b) 40%', {correct: 'wrong'}],
    a3: ['c) 60%', {correct: 'wrong'}],
    a4: ['d) 70%(answer)', {correct: 'correct'}]
  },
  //Question 7
  {
    question: 'Q7: What are the proper protective gear you should wear?',
    a1: ['a) Helmet, footwear, pants, jacket, and gloves.(answer)', {correct: 'correct'}],
    a2: ['b) anything that makes you comfortable.', {correct: 'wrong'}],
    a3: ['c) Just a helmet and gloves should be fine.', {correct: 'wrong'}],
    a4: ['d) Just a helmet.', {correct: 'wrong'}]
  },
  //Question 8
  {
    question: 'Q8: Where do crashes occur most often?',
    a1: ['a) highways', {correct: 'wrong'}],
    a2: ['b) curves', {correct: 'wrong'}],
    a3: ['c) intersections', {correct: 'wrong'}],
    a4: ['d) both b and c.(answer)', {correct: 'correct'}]
  },
  //Question 9
  {
    question: 'Q9: When is rain most slick?',
    a1: ['a) 20min', {correct: 'wrong'}],
    a2: ['b) 30min', {correct: 'wrong'}],
    a3: ['c) 40min', {correct: 'wrong'}],
    a4: ['d) The first few minutes.(answer)', {correct: 'correct'}]
  },
  //Question 10
  {
    question: 'Q10: Where are the motorcyclists blind spots located?',
    a1: ['a) Beside you and behind you.(answer)', {correct: 'correct'}],
    a2: ['b) In front of you and beside you.', {correct: 'wrong'}],
    a3: ['c) Behind you.', {correct: 'wrong'}],
    a4: ['d) Beside you.', {correct: 'wrong'}]
  }
  ];

//add hide class to a specific selector.
const hideElement = function(selector){
  $(selector).addClass('hide');
};

//removes hide class from specefic selector.
const unhideElement = function(selector){
    $(selector).removeClass('hide');
};

//function that adds a form to quizSection using questionsAnswers.
const showQuestion = function(qIndex){
  unhideElement('.quizSection');
  $('form').append(`<h2>${questionsAnswers[qIndex].question}</h2>
  <div>
    <input role="radio" type="radio" id="answer1" class="js-answer" name="answers" value="${questionsAnswers[qIndex].a1[1].correct}" checked/>
    <label for="answer1">${questionsAnswers[qIndex].a1[0]}</label>
  </div>
  <div>
    <input role="radio" type="radio" id="answer2" class="js-answer" name="answers" value="${questionsAnswers[qIndex].a2[1].correct}"/>
    <label for="answer2">${questionsAnswers[qIndex].a2[0]}</label>
  </div>
  <div>
    <input role="radio" type="radio" id="answer3" class="js-answer" name="answers" value="${questionsAnswers[qIndex].a3[1].correct}"/>
    <label for="answer3">${questionsAnswers[qIndex].a3[0]}</label>
  </div>
  <div>
    <input role="radio" type="radio" id="answer4" class="js-answer" name="answers" value="${questionsAnswers[qIndex].a4[1].correct}"/>
    <label for="answer4">${questionsAnswers[qIndex].a4[0]}</label>
  </div>
  <div>
    <input role="button" class="checkAnswerBtn" type="submit" value="Check Answer" />
  </div>
`);
};

//Start questions by using a click event on begin button
const startQuiz = function() {
  //Initialize counters
  $('.beginBtn').on('click', function(event) {
    hideElement('.beginBtn');
    unhideElement('.scoringSection');
    //show first question
    showQuestion(questionIndexCounter);
    //Setting default value for default checked radio button
    userCorrect = questionsAnswers[questionIndexCounter].a1[1].correct;
    $('.usersAnswer').text(`You got it ${userCorrect}!`);
  });
};

//check if user got correct answer for questions
const checkAnswer = function() {
  $('.quizSection').on('click', '.js-answer', function(event) {
    hideElement('.feedbackSection');
    $('.usersAnswer').text(`You got it ${this.value}!`);
    userCorrect = this.value; //changes userCorrect value to use for updating score.
  });
};

//Show feedback section
const getFeedback = function() {
$('form').on('click', '.checkAnswerBtn', function(event) {
  event.preventDefault(); //prevents submiting to server in our scenerio
  unhideElement('.feedbackSection');
  //iterate all elements that has class 'js-answer' to find the correct answer and modify the inner text
  // of all elements with the class 'correctAnswer'.
  $('.js-answer').each(function() {
    if($(this).attr('value') === 'correct'){
      $('.correctAnswer').text('The correct answer is ' +  $(this).siblings('label').text());
    }
  });
});
};

//adds specific text to final section based on users total correct answers
const updateFinalSection = function() {
  if(scoreCounter === questionsAnswers.length) {
    $('.finalSection').append('<p>You know your stuff!</p>');
  }else if(scoreCounter > 6){
    $('.finalSection').append('<p>Pretty good!</p>');
  }else {
    $('.finalSection').append('<p>Nice try, might want to review a little more.</p>');
  }
  $('.finalSection').append('<button role="button">Go back to start screen</button>');
};

//resets and goes to start section
const returnToStartScreen = function() {
  $('.finalSection').on('click', 'button', function(event){
    hideElement('.finalSection');
    hideElement('.scoringSection');
    unhideElement('.beginBtn');
    questionIndexCounter = 0;
    scoreCounter = 0;
    $('.score').text(`Score: ${scoreCounter} / ${questionsAnswers.length}`);
    $('.finalSection').empty();
  }
)};


//Gets updated score and either goes to next question or when all questions
//are done we go to the final section.
const proceedAndUpdate = function() {

  $('.proceedBtn').on('click', function(event) {
      //checks if user chose correct answer, if true increment score by 1.
      if(userCorrect === 'correct'){
        scoreCounter++;
      }
      //hides feedback section
      hideElement('.feedbackSection');
      //update score
      $('.score').text(`Score: ${scoreCounter} / ${questionsAnswers.length}`);
      //clears  quiz form
      $('#quiz').empty();
      //increments index counter to use to get next question
      questionIndexCounter++;
      //if index counter reaches the final question we hide all sections and show final section,
      //else display next question.
      if(questionIndexCounter === questionsAnswers.length){
        hideElement('.quizSection');
        // hideElement('.feedbackSection');
        unhideElement('.finalSection');
        updateFinalSection();
      }else{
        showQuestion(questionIndexCounter);
        userCorrect = questionsAnswers[questionIndexCounter].a1[1].correct;
        $('.usersAnswer').text(`You got it ${questionsAnswers[questionIndexCounter].a1[1].correct}!`);
      }
  });
};

//main call function
const updateQuiz = function() {
  startQuiz();
  checkAnswer();
  getFeedback();
  proceedAndUpdate();
  returnToStartScreen();
};

$(updateQuiz());







//*current task: to get questionAnswers to display final page.
//other tasks: css,media queries and make keyboard user friendly.










































//Future ideas:
//randomize question evertime 'try again' button is clicked.



