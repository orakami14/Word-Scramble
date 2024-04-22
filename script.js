var words= [
    "apple",
    "banana", 
    "orange", 
    "grape", 
    "kiwi", 
    "strawberry", 
    "pineapple",
];

var currentWordIndex = 0;
var scrambleWord = "";
var timer;


function displayWord() {
   $("#word").text(scrambleWord);
}
function scrambledWord(word) {
   return word
   .split("")
   .sort(function () {
       return 0.5 - Math.random();
   })
   .join("");
}

function checkword(){
    var inputWord = $("#inputWord").val().trim().toLowerCase();
    if(inputWord === words[currentWordIndex]){
    clearInterval(timer);
    $(".error").text("correct");
    nextWord();
    $(".error").addClass("d-none");
    } else{
        $(".error").removeClass("d-none");
        $(".error").text("Incorrect try again");
    }
}

function nextWord(){
    clearInterval(timer);
    currentWordIndex = (currentWordIndex + 1) % words.length;
    scrambleWord = scrambledWord(words[currentWordIndex]);
    $("#inputWord").val("");
    $(".error").text("");
    displayWord();
    startTimer();
}

function startTimer(){
    var seconds = 60;
    $("#time").text(seconds);

    timer = setInterval(function(){
        seconds--;
        $("#time").text(seconds);
        if(seconds <= 0){
            clearInterval(timer);
            $(".error").text("Time out"); 
        }
    }, 1000);
 }

    $(document).ready(function () {
    scrambleWord= scrambledWord(words[currentWordIndex]);
    displayWord();
    startTimer();   
    
    $("#check").click(function () {
        checkword();
    });
    $("#refresh").click(function () {
        nextWord();
    });
    $("#inputWord").keyup(function (event) {
        if(event.keyCode === 13) {
            checkword();
        }
    });
 });
