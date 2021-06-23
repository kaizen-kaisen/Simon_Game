var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var start = false;



$(document).keydown(function() {
  if (start === false) {
    nextSequence();
    start = true;
  } });



// user click
$(".btn").on("click", function(event) {

  var userChosenColor = event.target.id;
  // var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswere((userClickedPattern.length - 1));
  console.log(userClickedPattern);
});





function checkAnswere(currentLevel) {
  // console.log(gamePattern);
  // console.log(userClickedPattern);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    // alert("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
    $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}



function nextSequence() {
  var randomNumber = (Math.floor((Math.random() * 4)));;
  var buttonColors = ["red", "blue", "green", "yellow"];
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("level " + level);
  level++;}


function startOver(){
    start = false;level = 0;
    gamePattern = [];
    userClickedPattern = [];
}



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
