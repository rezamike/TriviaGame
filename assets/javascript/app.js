$(document).ready(function () {

    // variable for question and answers
    var questions = [
        {
            question: "What film is considered to have the longest one-take in history?",
            choices: ["Russian Ark", "Children of Men", "Birdman", "Lost in London"],
            correct: "Lost in London"
        },
        {
            question: "In what film did Leonardo DiCaprio actually cut his hand and seriously injure himself during filming?",
            choices: ["Titanic", "Django Unchained", "Inception", "What's Eating Gilbert Grape?"],
            correct: "Django Unchained"
        },
        {
            question: "How long do the rights for movies last?",
            choices: ["Forever", "33 years", "95 years", "a decade"],
            correct: "95 years"
        },
        {
            question: "Which car company used a film to reinstate a classic car that was off the market for eight years?",
            choices: ["Ford", "Fiat", "Dodge", "Chevrolet"],
            correct: "Chevrolet"
        }
    ]

    // variable for wins, losses, quizzes
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    // var timer = 11;
    var intervalId;
    var answers = [];
    var results = (right + wrong + unanswered);

    // start timer function
    // function runTimer() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(timeLoss, 1000);
    // }

    // for loop to cross-check all of the possible 

    //  for loop to layer questions into the DOM (append)
    function trivia() {

        for (var i = 0; i < questions.length; i++) {
            var questionObject = questions[i];
            var questionWrap = $("<div>");
            questionWrap.append("<br>" + "<div>" + questionObject.question + "</div>");
            $("#questions").append(questionWrap);
            questionObject.choices.forEach((choice, index) => {
                var newInput = $(`<ul><input name='choice${index}' class='check${i}' type='radio' value='${choice}'>${choice}</ul>`);
                questionWrap.append(newInput);
            })




            // for loop on questions, put in DOM, and check for answer
            // for (var j = 0; j < questionObject.choices.length; j++) {
            //     var newInput = $(`<ul><input name='choice${j}' class='check${i}' type='radio' value='${questionObject.choices[j]}'>${questionObject.choices[j]}</ul>`);
            //     console.dir(newInput)
            //     // newInput.find(`input[class='check"${j}]`).attr("name", `choice${i}`);
            //     $("#questions").append(newInput);

            //     $("#choices").find($(".check" + i)).on("click", function () {
            //         if ((newInput.find("input[name='choice" + i + "']:checked").val()) === questionObject.correct) {
            //             right++;
            //             console.log(2);
            //         }
            //         // else {
            //         //     wrong++;
            //         // }
            //     })

            //     $("#choices").find($(".check" + i)).on("click", function () {
            //         answers.push(newInput.find("input[name='choice" + i + "']:checked").val());
            //     })
            // }
            // for (var k = 0; k < questions[k].correct; k++) {
            // }
        }
    }

    function checkAns() {
            for (var l = 0; l < questions.length; l++) {
                if (answers[l] !== questions[l].correct) {
                    wrong++;
                    console.log(wrong);
                }
            }
    }
    // var localVar = $("input").attr("name", "choice" + j);
    // localVar.attr("value", j);

    // function to read radio input


    // $( function() {
    //     $( "input" ).checkboxradio();
    //   } );
    // function winGame() {
    //     for (k = 0; k < questions[i].correct; k++) {
    // function to read radio input
    // $("input[type='radio']").on("click", function checkWin() {

    // })
    // }

    // if (right === 4) {
    //     stop();
    //     $(".time").hide();
    //     $(".questions").hide();
    //     $("#choices").hide();
    //     $(".results").show();
    //     $(".results").append("<div><h2><strong>Resulst: </strong></h2></div>" + "<div><p>Correct: " + right + "</p></div>" + "<div><p>Incorrect: " + wrong + "</p></div>" + "<div><p>Unanswered: " + unanswered + "</p></div>");
    // }

    // function for time decrease and time end
    function timeLoss() {
        timer--;
        $(".time").html("<br><strong>" + ":" + timer + "</strong>" + "<br>");

        // if it gets to 0 run stop function
        if (timer === 0 || right === 4) {
            // stops the main timer function and hides elements to prep for result screen
            stop();
            $(".time").hide();
            $(".questions").hide();
            $("#questions").hide();
            $(".results").show();
            $(".results").append("<div><h2><strong>Resulst: </strong></h2></div>" + "<div><p>Correct: " + right + "</p></div>" + "<div><p>Incorrect: " + wrong + "</p></div>" + "<div><p>Unanswered: " + unanswered + "</p></div>");
        }
    }

    // function to stop the interval countdown
    function stop() {
        clearInterval(intervalId);
    }


    // create function for removing Start button
    $(".startButton").on("click", function init() {
        $(".questions").show();
        $("#questions").show();
        $(".time").show();
        $(".startButton").hide();
        $(".results").hide();
        checkAns();
        // runTimer();
        trivia();

        // resets errything
        right = 0;
        wrong = 0;
        unanswered = 0;

    });





})