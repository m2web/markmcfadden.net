$( document ).ready(function() {
       var questionNumber = 0;
       var answersText = "";
       var correctAnswerCount = 0;
       var theScore = 0;
       var answerArray = [];

       var allQuestions = [{
           question: "What does 2+2 = ?",
           choices: ["1", "4", "6", "7"],
           correctAnswer: 1
       }, {
           question: "What is the price of eggs in China?",
           choices: ["$3.95", "$1.99", "$5.55", "It would not be in US Currency anyway!"],
           correctAnswer: 3
       }, {
           question: "Why is the sky blue?",
           choices: ["Because it is.", "Light refraction", "Don't know."],
           correctAnswer: 1
       }];

       var nextQuestion = function (questionNumber) {
           //clear content divs
           $("#question").html("");
           answersText = "";
           //form the answers           
           $.each(allQuestions[questionNumber]['choices'], function (i, obj) {
               answersText += "<input type='radio' name='selection' value=" + i;
               if (answerArray[questionNumber]) {
                   if (answerArray[questionNumber].answer == i) {
                       //console.log("matched!");
                       answersText += " checked ";
                   }
               }
               answersText += "> " + obj + " <br>";
           });

           //popluate div#question
           $("#question").html("Question " + (questionNumber + 1) + " : " + allQuestions[questionNumber]['question']);

           //populate div#answers
           $("#answers").html(answersText);
       };

       $("#nextButton").click(function () {
           $("#backButton").show();
           //score the selection
           //get the radio button value
           var selectedVal = "";
           var selected = $("#answers input[type='radio']:checked");
           if (selected.length > 0) {
               selectedVal = selected.val();
               //store the answer for display if they come back to the question
               var quizAnswer = new QuizAnswer(questionNumber, selectedVal);
               if (allQuestions[questionNumber]['correctAnswer'] == selectedVal) {
                   quizAnswer.isCorrect = true;
               } else {
                   quizAnswer.isCorrect = false;
               }
               answerArray[questionNumber] = quizAnswer;
           } else { //no selection made
               alert("Please make a selection.");
               return;
           }
           //see if they are done
           if (questionNumber < allQuestions.length - 1) { //not done
               questionNumber += 1;
               nextQuestion(questionNumber);
           } else { //done
               //now score the quiz and show the results
               theScore = 0;

               //getthe number of correct answers
               for (i = 0; i < answerArray.length; i++) {
                   if (answerArray[i].isCorrect == true) {
                       correctAnswerCount++;
                   }
               }

               theScore = correctAnswerCount / allQuestions.length * 100;
               var results = "Your score is: " + theScore.toFixed(2) + "%";
               /*
               //don't need to show these sections now
               $("#question").hide();
               $("#answers").hide();
               $("#buttonDiv").hide();
                */
               $("#nextButton").hide();
               //show the score and start again button if score not 100
               correctAnswerCount = 0;
               $("#score").html(results).show();
               /*
               if (theScore < 100) {
                   $("#startAgainButtonDiv").css("display", "block");
               }
               */
           }
       });
       /*
       $("#startAgainButtonDiv").click(function () {
           //reset global variables 
           questionNumber = 0;
           theScore = 0;
           answersText = "";
           correctAnswerCount = 0;

           //reset what is visible
           $("#question").show();
           $("#answers").show();
           $("#buttonDiv").show();
           $("#score").html("").hide();
           $("#startAgainButtonDiv").css("display", "none");

           //now reload the question/answers
           nextQuestion(questionNumber);
       });
*/
       $("#backButton").click(function () {
           $("#nextButton").show();
           $("#score").hide();
           //score the selection
           //get the radio button value
           var selectedVal = "";
           var selected = $("#answers input[type='radio']:checked");
           if (selected.length > 0) {
               selectedVal = selected.val();
               //store the answer for display if they come back to the question
               var quizAnswer = new QuizAnswer(questionNumber, selectedVal);
               if (allQuestions[questionNumber]['correctAnswer'] == selectedVal) {
                   quizAnswer.isCorrect = true;
               } else {
                   quizAnswer.isCorrect = false;
               }
               answerArray[questionNumber] = quizAnswer;
           } else { //no selection made
               alert("Please make a selection.");
               return;
           }
           if (questionNumber > 0) { //not at the beginning
               questionNumber -= 1;
               if (questionNumber == 0) {
                   $("#backButton").hide();
               }

               nextQuestion(questionNumber);
           }
       });

       //quiz answer object
       function QuizAnswer(questionNumber, answer, isCorrect) {
           this.questionNumber = questionNumber;
           this.answer = answer;
           this.isCorrect = isCorrect;
       }

       //run first time
       nextQuestion(questionNumber);
});