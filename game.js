var gamePattern = [];
var userClickedPattern = [];
var buttonColores= ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;


//Detects a keypress to start the game once
$(document).keypress(function () {
    
      if(!started) {
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
      }
});

function nextSequence (){
    userClickedPattern = [];
    level++;
      $("#level-title").text("level " + level); 
      
      
      var randomNum = Math.round(Math.random()*3);
      var randomChosenColor = buttonColores[randomNum];    
      gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColor);
 
}


$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    checkAnswer(userClickedPattern.length-1);
    });


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
     console.log("success");   
     if (userClickedPattern.length === gamePattern.length) { 
        setTimeout(function() {
            nextSequence();

        }, 1000);
    }
        
    } else {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");    
        }, 200);

        $("#level-title").text("Game Over, Press any key to Restart");
        startOver();
    }   
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}


function playSound (name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


function animatePress (currentColor) {
    
    $("#" + currentColor).addClass("pressed");

setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
} , 100);

}













