var words = [
    "apple",
    "banana", 
    "orange", 
    "pineapple",
    "guava", 
    "avocado", 
    "mango",
    "peach", 
    "grapes", 
    "Watermelon",
    "Dragon fruit",
    "Strawberry", 
    "Blueberry", 
    "Blackberry",
    "Gooseberry", 
    "Cherry", 
    "Jackfruit",
    "Lime", 
    "Kiwifruit", 
    "Pear",

    
];


var currentWordIndex = 0;
var scrambleWord = "";
var timer;
var score = 0;

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
        score++;
        $("#score").text(score);
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
    var seconds = 10;
    $("#time").text(seconds);

    timer = setInterval(function(){
        seconds--;
        $("#time").text(seconds);
        if(seconds <= 0){
            clearInterval(timer);
            $(".error").text("Time out"); 
            $("#score").text("Total score: " + score);
        }
    }, 1000);
 }

$(document).ready(function () {
    scrambleWord = scrambledWord(words[currentWordIndex]);
    displayWord();
    startTimer();   
    
    $("#check").click(function () {
        checkword();
    });
    $("#refresh").click(function () {
        score = 0;
        $("#score").text("0");
        nextWord();
    });
    $("#inputWord").keyup(function (event) {
        if(event.keyCode === 13) {
            checkword();
        }
    });
 });
