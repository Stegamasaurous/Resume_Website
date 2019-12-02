function shake() {
  var fortune = ""; //set fortune string to blank
  document.getElementById('input').innerHTML = fortune; //show no fortune on the page
  var fortuneChoice = ["Drink Water", "Stretch a Bit", "Make Time for Sleep", "Forty-Two", "Stay on Target", "Tea. Earl Grey. Hot."];
  var randomFortuneNumber = Math.floor(Math.random() * fortuneChoice.length); //choose from indecies of above array

  //Function to display the fortune which will be delayed until after the ball finishes moving
  var showFortune = function () {
    var opacity = 0
    fortune = fortuneChoice[randomFortuneNumber]; // get a random index from array of fortunes
    document.getElementById('input').innerHTML = fortune; //show the fortune in HTML
    console.log("showFortune() ran: fortune = " + fortune); //debug
  }
  setTimeout(showFortune, 1300); //delay the fortune until the below code finishes (or there abouts)
  //Shake the 8 ball
  var eightBallDiv = document.getElementById("magic-8-ball"); //div to shake
  var position = 0;   //position will hold the style "Right: _"
  var speed = 3; //miliseconds between each change in position
  var interval = setInterval(move, speed);
  console.log("interval = " + interval);
  var counter = 0; //hold how many times the ball has moved
  var direction = "right"; //which way the ball moves - will change after specified length of movement
  //function governs "movements" (CSS changes) until counter breaks
  function move() {
    //if the counter++ reaches a certain number, break the cycle and position the ball in the middle
    if (counter === 200) {
      clearInterval(interval);
      eightBallDiv.style.right = 0;
      //if the directoin is right, move the ball to the left 20 times then tell it to move left instead
    } else {
      if (direction === "right") {
        position++;
        eightBallDiv.style.right = position + 'px';
        counter++;
        if (position === 20) {
          direction = "left";
        }
        //move it left instead 40 times, and then back to the right
      } else if (direction === "left") {
        position--;
        eightBallDiv.style.right = (position) + 'px';
        counter++;
        if (position === -20) {
          direction = "right";
        }
      }
    }
  }
}
