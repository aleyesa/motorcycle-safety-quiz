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
    a1: [`a) 
    1. You fit the motorcycle.
    2. You inspect the motorcycle.
    3. You use proper protective riding gear.
    4. You have a good mental attitude with safety as your priority.`, {correct: 'correct'}],
    a2: [`b)
    1. You look cool on a motorcycle.
    2. You inspect the motorcycle.
    3. You use proper protective riding gear.
    4. You have a good mental attitude with safety as your priority.`, {correct: 'wrong'}],
    a3: [`c)
    1. You fit the motorcycle.
    2. You think that your motorcycle was good yesterday,
    so you should be fine today without basic inspection.
    3. You use proper protective riding gear.
    4. You have a good mental attitude with safety as your priority.`, {correct: 'wrong'}],
    a4: [`d)
    1. You fit the motorcycle.
    2. You inspect the motorcycle.
    3. You use proper protective riding gear.
    4. If you have no fear go right ahead.`, {correct: 'wrong'}],
  },
  //Question 2
  {
    question: 'Q2: When finding the best fit for you, what are the two primary features you should consider?',
    a1: ['a) How cool it looks and the bigger the motorcycle, the better!', {correct: 'wrong'}],
    a2: ['b) If it catches everyones eyes and has a nice seat cushion.', {correct: 'wrong'}],
    a3: ['c) It should be a good price and look promising.', {correct: 'wrong'}],
    a4: ['d) Seat height and overall motorcycle size.', {correct: 'correct'}]
  },
  //Question 3
  {
    question: 'Q3: A quick an easy method to remember the major parts to inspect your motorcycle everytime you ride is called?',
    a1: ['a) T-CLOCS', {correct: 'correct'}],
    a2: ['b) A-CLOCS', {correct: 'wrong'}],
    a3: ['c) C-CLOCS ', {correct: 'wrong'}],
    a4: ['d) R-CLOCS', {correct: 'wrong'}]
  },
  //Question 4
  {
    question: 'Q4: A procedure called FINE-C is used as an engine pre-start routine, what does it stand for?',
    a1: ['a) Focus, Ignition, Neutral, Engine Cut-off Switch, Choke/Clutch', {correct: 'correct'}],
    a2: ['b) Fuel, Ignition, Neutral, Engine, Cut-off Switch, Choke/Clutch', {correct: 'wrong'}],
    a3: ['c) Fuel, Intuition, Neutral,  Engine, Cut-off Switch, Choke/Clutch', {correct: 'wrong'}],
    a4: ['d) Fuel, Ignition, Normal, Enginge, Cut-off Switch, Choke/Clutch', {correct: 'wrong'}]
  },
  //Question 5
  {
    question: 'Q5: In what steps and correct order should you consider when making a turn?',
    a1: ['a) Slow, Look, Press, and Roll.', {correct: 'correct'}],
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
    a4: ['d) 70%', {correct: 'correct'}]
  },
  //Question 7
  {
    question: 'Q7: What are the proper protective gear you should wear?',
    a1: ['a) Helmet, footwear, pants, jacket, and gloves.', {correct: 'correct'}],
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
    a4: ['d) both b and c.', {correct: 'correct'}]
  },
  //Question 9
  {
    question: 'Q9: When is rain most slick?',
    a1: ['a) 20min', {correct: 'wrong'}],
    a2: ['b) 30min', {correct: 'wrong'}],
    a3: ['c) 40min', {correct: 'wrong'}],
    a4: ['d) The first few minutes.', {correct: 'correct'}]
  },
  //Question 10
  {
    question: 'Q10: Where are the motorcyclists blind spots located?',
    a1: ['a) Beside you and behind you.', {correct: 'correct'}],
    a2: ['b) In front of you and beside you.', {correct: 'wrong'}],
    a3: ['c) Behind you.', {correct: 'wrong'}],
    a4: ['d) Beside you.', {correct: 'wrong'}]
  }
  ];

//function that adds a form to quizSection using questionsAnswers data.
const showQuestion = function(qIndex){
  unhideElement('.quizSection'); //hide quiz section
  $('.quizSection').append(`
  <form id="quiz" action="/Motorcycle-Safety-Quiz" method="get">
    <h2>${questionsAnswers[qIndex].question}</h2>
    <div>
      <input role="radio" type="radio" id="answer1" class="js-answer" name="answers" value="${questionsAnswers[qIndex].a1[1].correct}" required/>
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
    <div class="center">
      <input role="button" class="checkAnswerBtn" type="submit" value="Check Answer" />
    </div>
  </form>
`);
};

//change section display property to none to a specific selector.
const hideElement = function(selector){
  $(selector).css('display', 'none');
};

//change elements display property to a specific selector
const unhideElement = function(selector, dispValue = 'block'){
    $(selector).css('display', dispValue);
};

//Displays a quote bubble of encouragement
const showEncouragement = function(phrase){
    $('.quoteBubble p').text(phrase);
    unhideElement('.quoteBubble', 'inline');
  };

//hides all elements not related to start screen content and a button used to 
//navigate to the next section.
const startQuiz = function() {
  //hides all sections other than start screen content
  hideElement('.scoringSection');
  hideElement('.quizSection');
  hideElement('.feedbackSection');
  hideElement('.finalSection');
  //Start questions by using a click event on begin button
  $('.beginBtn').on('click', function(event) {
    showEncouragement('Good luck!');
    hideElement('.startSection'); 
    unhideElement('.scoringSection'); //displays default score section
    //show first question
    showQuestion(questionIndexCounter);
    $('.score').text(`Score: ${scoreCounter} / ${questionsAnswers.length}`); //update score
  });
};

//check if user got correct answer for questions
const checkAnswer = function() {
  $('.quizSection').on('click', '.js-answer', function(event) {
    hideElement('.quoteBubble');
    hideElement('.feedbackSection');
    $('.usersAnswer').text(`You got it ${this.value}!`);
    userCorrect = this.value; //changes userCorrect value to use for updating score.
  });
};

//Show feedback section
const getFeedback = function() {
$('.quizSection').on('submit', function(event) {
  event.preventDefault(); //prevents default form submission to server.
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
  $('.finalSection').append('<img role="image" src="http://www.mysafetysign.com/img/lg/S/Be-Alert-Safety-Slogan-Sign-S-4107.gif" alt="Motorycle Slogan: Be Alert, Expect The Unexpected"/>');
  $('.finalSection').append('<button role="button" class="finalBtn">Go back to start screen</button>');
};

//resets and goes to start section
const returnToStartScreen = function() {
  $('.finalSection').on('click', '.finalBtn', function(event){
    hideElement('.quoteBubble');
    hideElement('.finalSection');
    hideElement('.scoringSection');
    unhideElement('.startSection');
    questionIndexCounter = 0;
    scoreCounter = 0;
    $('.score').text(`Score: ${scoreCounter} / ${questionsAnswers.length}`);
    $('.finalSection').empty();
  });
};

//Gets updated score and either goes to next question or when all questions
//are done we go to the final section.
const proceedAndUpdate = function() {
  $('.proceedBtn').on('click', function(event) {
      //checks if user chose correct answer, if true increment score by 1.
      if(userCorrect === 'correct'){
        showEncouragement('Keep it up!'); 
        scoreCounter++;
      }else {
        showEncouragement('No worries!');
      }
      //hides feedback section
      hideElement('.feedbackSection');
      //update score
      $('.score').text(`Score: ${scoreCounter} / ${questionsAnswers.length}`);
      //clears  everything within quizSection
      $('.quizSection').empty();
      //increments index counter to use to get next question
      questionIndexCounter++;
      //if index counter reaches the final question we hide all sections and show final section,
      //else display next question.
      if(questionIndexCounter === questionsAnswers.length){
        hideElement('.quizSection');
        // hideElement('.feedbackSection');
        unhideElement('.finalSection');
        showEncouragement('Ride safe!');
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

//Future ideas:
//randomize questionsAnswers
//animations
//universal function for adding questions Answers




