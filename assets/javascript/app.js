// variable for question and answers
let questions = [
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
let right = 0;
let wrong = 0;
let unanswered = 0;
let timer = 46;
let intervalId;


$(document).ready(function () {

    // start timer function
    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(timeLoss, 1000);
    }

    //  for loop to layer questions into the DOM (append)
    function trivia() {
        for (let i = 0; i < questions.length; i++) {
            $(".choices").append("<br>" + questions[i].question);

            // for loop on questions, put in DOM, and check for answer
            for (let j = 0; j < questions[i].choices.length; j++) {
                let newInput = $("<ul><input name='choice" + i + "' class='check" + j + "' type='radio'> " + questions[i].choices[j] + "</ul>");
                newInput.attr("value", questions[i].choices[j]);
                $(".choices").append(newInput);
                // let localVar = $("input").attr("name", "choice" + j);
                // localVar.attr("value", j);


                for (k = 0; k < questions[i].correct; k++) {
                    // function to read radio input
                    $("input[type=radio]").on("click", function checkWin() {
                    $("input[type=radio]:checked", ".choices").val()    
                            console.log("fuck off");
                        
                    })
                }

                // function to read radio input
                // $("input[type='radio']").on("click", function checkWin() {
                //     if (($("input[name='crossRef']:checked").val() === questions[j].correct[i])) {
                //         console.log("fuck you");
                //     }
                // })

                // $( function() {
                //     $( "input" ).checkboxradio();
                //   } );

            }
        }
    }

    // function for time decrease and time end
    function timeLoss() {
        timer--;
        $(".time").html("<br><strong>" + ":" + timer + "</strong>" + "<br>");

        // if it gets to 0 run stop function
        if (timer === 0) {
            // stops the main timer function and hides elements to prep for result screen
            stop();
            $(".time").hide();
            $(".questions").hide();
            $(".choices").hide();
        }
    }

    // function to stop the interval countdown
    function stop() {
        clearInterval(intervalId);
    }


    // create function for removing Start button
    $(".startButton").on("click", function init() {
        $(".questions").show();
        $(".choices").show();
        $(".time").show();
        $(".startButton").hide();
        runTimer();
        trivia();

        // resets errything
        right = 0;
        wrong = 0;
        unanswered = 0;

    });





})