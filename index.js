// 'use strict';
//helps get to next question and its answers data
let questionIndexCounter = 0;
let userCorrect = false;
let correctAnswer = "";
let scoreCounter = 0;
let questionsDone = 0;
//questionsAnswers will be an array of objects where i store all the information about the questions and answers.
//I will have 6 keys called question, a1, a2, a3, a4, and correct;
const questionsAnswers = [
  {
    //Question 1
    question: 'Q1: What are the four preparations you should do when preparing to ride a motorcycle?',
    a1: ['a)\n\
    1. You fit the motorcycle.(answer)\n\
    2. You inspect the motorcycle.\n\
    3. You use proper protective riding gear.\n\
    4. You have a good mental attitude with safety as your priority.', {correct: true}],
    a2: ['b\n\
    1. You look cool on a motorcycle.\n\
    2. You inspect the motorcycle.\n\
    3. You use proper protective riding gear.\n\
    4. You have a good mental attitude with safety as your priority.', {correct: false}],
    a3: ['c)\n\
    1. You fit the motorcycle.\n\
    2. You think that your motorcycle was good yesterday,\n\
    so you should be fine today without basic inspection.\n\
    3. You use proper protective riding gear.\n\
    4. You have a good mental attitude with safety as your priority.', {correct: false}],
    a4: ['d)\n\
    1. You fit the motorcycle.\n\
    2. You inspect the motorcycle.\n\
    3. You use proper protective riding gear.\n\
    4. If you have no fear go right ahead.', {correct: false}]
   
  },
  //Question 2
  {
    question: 'Q2: When finding the best fit for you, what are the two primary features you should consider?',
    a1: ['a) How cool it looks and the bigger the motorcycle, the better!', {correct: false}],
    a2: ['b) If it catches everyones eyes and has a nice seat cushion.', {correct: false}],
    a3: ['c) It should be a good price and look promising.', {correct: false}],
    a4: ['d) Seat height and overall motorcycle size.(answer)', {correct: true}]
  },
  //Question 3
  {
    question: 'Q3: A quick an easy method to remember the major parts to inspect your motorcycle everytime you ride is called?',
    a1: ['a) T-CLOCS(answer)', {correct: true}],
    a2: ['b) A-CLOCS', {correct: false}],
    a3: ['c) C-CLOCS ', {correct: false}],
    a4: ['d) R-CLOCS', {correct: false}]
  },
  //Question 4
  {
    question: 'Q4: A procedure called FINE-C is used as an engine pre-start routine, what does it stand for?',
    a1: ['a) Focus, Ignition, Neutral, Engine Cut-off Switch, Choke/Clutch(answer)', {correct: true}],
    a2: ['b) Fuel, Ignition, Neutral, Engine, Cut-off Switch, Choke/Clutch', {correct: false}],
    a3: ['c) Fuel, Intuition, Neutral,  Engine, Cut-off Switch, Choke/Clutch', {correct: false}],
    a4: ['d) Fuel, Ignition, Normal, Enginge, Cut-off Switch, Choke/Clutch', {correct: false}]
  },
  //Question 5
  {
    question: 'Q5: In what steps and correct order should you consider when making a turn.',
    a1: ['a) Slow, Look, Press, and Roll.(answer)', {correct: true}],
    a2: ['b)  Roll, Press, Look, Slow.', {correct: false}],
    a3: ['c)  Look, Press, Slow, Roll.', {correct: false}],
    a4: ['d)  Roll, Look, Press, Slow.', {correct: false}]
  },
  //Question 6
  {
    question: 'Q6: How much stopping power does a motorcycles front brakes provide?',
    a1: ['a) 50%', {correct: false}],
    a2: ['b) 40%', {correct: false}],
    a3: ['c) 60%', {correct: false}],
    a4: ['d) 70%(answer)', {correct: true}]
  },
  //Question 7
  {
    question: 'Q7: What are the proper protective gear you should wear?',
    a1: ['a) Helmet, footwear, pants, jacket, and gloves.(answer)', {correct: true}],
    a2: ['b) anything that makes you comfortable.', {correct: false}],
    a3: ['c) Just a helmet and gloves should be fine.', {correct: false}],
    a4: ['d) Just a helmet.', {correct: false}]
  },
  //Question 8
  {
    question: 'Q8: Where do crashes occur most often?',
    a1: ['a) highways', {correct: false}],
    a2: ['b) curves', {correct: false}],
    a3: ['c) intersections', {correct: false}],
    a4: ['d) both b and c.(answer)', {correct: true}]
  },
  //Question 9
  {
    question: 'Q9: When is rain most slick?',
    a1: ['a) 20min', {correct: false}],
    a2: ['b) 30min', {correct: false}],
    a3: ['c) 40min', {correct: false}],
    a4: ['d) The first few minutes.(answer)', {correct: true}]
  },
  //Question 10
  {
    question: 'Q10: Where are the motorcyclists blind spots located?',
    a1: ['a) Beside you and behind you.(answer)', {correct: true}],
    a2: ['b) In front of you and beside you.', {correct: false}],
    a3: ['c) Behind you.', {correct: false}],
    a4: ['d) Beside you.', {correct: false}]
  }
  ];

// console.log(questionsAnswers[1].question);
// console.log(questionsAnswers[1].a1[0]);
// console.log(questionsAnswers[1].a2[0]);
// console.log(questionsAnswers[1].a3[0]);
// console.log(questionsAnswers[1].a4[0]);
// console.log(questionsAnswers[1].a1[1].correct);
// if(questionsAnswers[1].a1[1].correct === true){
//   console.log("correct answer");
// }else {
//   console.log("wrong answer");
// }
// for(let i = 0; i < questionsAnswers.length; i++){
//   for(let j = 0; j < 1; j++){
//     console.log(questionsAnswers[i].question);
//     console.log(questionsAnswers[i].a1[j]);
//     console.log(questionsAnswers[i].a2[j]);
//     console.log(questionsAnswers[i].a3[j]);
//     console.log(questionsAnswers[i].a4[j] + '\n');
    
//   }
  
// }
// console.log(questionsAnswers[0].a1.length);


//add hide class to a specific selector.
const hideElement = function(selector){
  $(selector).addClass('hide');
};

//removes hide class from specefic selector.
const unhideElement = function(selector){
    $(selector).removeClass('hide');
};

//function that adds questionsAnswers data to empty form.
const showQuestion = function(qIndex){
  unhideElement('.quizSection');
  $('form').append(`<h2>${questionsAnswers[qIndex].question}</h2>
  <div>
    <input role="radio" type="radio" id="answer1" name="answers" value="a"/>
    <label for="answer1">${questionsAnswers[qIndex].a1[0]}</label>
  </div>
  <div>
    <input role="radio" type="radio" id="answer2" name="answers" value="b"/>
    <label for="answer2">${questionsAnswers[qIndex].a2[0]}</label>
  </div>
  <div>
    <input role="radio" type="radio" id="answer3" name="answers" value="c"/>
    <label for="answer3">${questionsAnswers[qIndex].a3[0]}</label>
  </div>
  <div>
    <input role="radio" type="radio" id="answer4" name="answers" value="d"/>
    <label for="answer4">${questionsAnswers[qIndex].a4[0]}</label>
  </div>
  <div>
    <input role="button" class="checkAnswerBtn" type="button" value="Check Answer"/>
  </div>
`);
};

//Start queestions by using click event listener on begin button
const startQuiz = function() {
$('.beginBtn').on('click', function(event) {
  hideElement('.beginBtn');
  unhideElement('.scoringSection');
  questionIndexCounter = 0;
  showQuestion(questionIndexCounter);
  questionsDone++;
});
};

//a counter that increments by 1 once clicked on some buttons such as the begin button, and proceed button in a feedback page.
//so that we can use the counter to get specific index in array questionsAnswers.

//check if user got correct answer for questions
const checkAnswer = function() {
  $('form').on('click', '#answer1', function(event) {
    hideElement('.feedbackSection');
    if(questionsAnswers[questionIndexCounter].a1[1].correct === true) {
      correctAnswer = questionsAnswers[questionIndexCounter].a1[0];
      userCorrect = true;
      return $('.usersAnswer').text("You got it correct!");
    }else {
      userCorrect = false;
      return $('.usersAnswer').text("You got it wrong!");
    }
  });
    $('form').on('click', '#answer2', function(event) {
    hideElement('.feedbackSection');
    if(questionsAnswers[questionIndexCounter].a2[1].correct === true) {
      correctAnswer = questionsAnswers[questionIndexCounter].a2[0];
      userCorrect = true;
      return $('.usersAnswer').text("You got it correct!");
    }else {
      userCorrect = false;
      return $('.usersAnswer').text("You got it wrong!");
    }
  });
    $('form').on('click', '#answer3', function(event) {
    hideElement('.feedbackSection');
    if(questionsAnswers[questionIndexCounter].a3[1].correct === true) {
      correctAnswer = questionsAnswers[questionIndexCounter].a3[0];
      userCorrect = true;
      return $('.usersAnswer').text("You got it correct!");
    }else {
      userCorrect = false;
      return $('.usersAnswer').text("You got it wrong!");
    }
  });
    $('form').on('click', '#answer4', function(event) {
    hideElement('.feedbackSection');
    if(questionsAnswers[questionIndexCounter].a4[1].correct === true) {
      correctAnswer = questionsAnswers[questionIndexCounter].a4[0];
      userCorrect = true;
      return $('.usersAnswer').text("You got it correct!");
    }else {
      userCorrect = false;
      return $('.usersAnswer').text("You got it wrong!");
    }
  });
};

//Show feedback section
const getFeedback = function() {
$('form').on('click', '.checkAnswerBtn', function(event) {
  unhideElement('.feedbackSection');
  $('.correctAnswer').text(`The correct answer is ${correctAnswer}`);
});
};

//Get updated score
const proceedAndUpdate = function() {
  $('.proceedBtn').on('click', function(event) {
    // if statement to get final page
    // if(userCorrect === true && questionsDone === 10){
    //   if(userCorrect === true){
    //     scoreCounter++;
    //     $('.score').text(`Score: ${scoreCounter} / 10`);
    //     hideElement('.feedbackSection');
    //     $('#quiz').empty();
    //     unhideElement('.finalSection');
    //   }else {
    //     $('.score').text(`Score: ${scoreCounter} / 10`);
    //     hideElement('.feedbackSection');
    //     $('#quiz').empty();
    //     unhideElement('.finalSection');
    //   }
    // }
    if(userCorrect === true){
      scoreCounter++;
      $('.score').text(`Score: ${scoreCounter} / 10`);
      hideElement('.feedbackSection');
      $('#quiz').empty();
      questionIndexCounter++;
      questionsDone++;
      showQuestion(questionIndexCounter);
      console.log(questionsDone);
    }else {
      $('.score').text(`Score: ${scoreCounter} / 10`);
      hideElement('.feedbackSection');
      $('#quiz').empty();
      questionIndexCounter++;
      questionsDone++;
      showQuestion(questionIndexCounter);
      console.log(questionsDone);
    }
  });
};



const updateQuiz = function() {
  startQuiz();
  checkAnswer();
  getFeedback();
  proceedAndUpdate();
};

$(updateQuiz());







//*current task: to get questionAnswers to display final page.
//other tasks: css,media queries and make keyboard user friendly.










































//Future ideas:
//randomize question evertime 'try again' button is clicked.



