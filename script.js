var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var timer; 
var timeLeft = 120; // seconds

//Global Variables
//var pattern = [2, 5, 4, 3, 2, 1, 5, 4];
var pattern = [Math.floor(Math.random()*4+1),Math.floor(Math.random()*4+1),Math.floor(Math.random()*4+1),Math.floor(Math.random()*4+1),Math.floor(Math.random()*4+1),Math.floor(Math.random()*4+1),Math.floor(Math.random()*4+1)]
var progress = 0; 
var counter = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    counter = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    timeLeft = 120;
    timer = setInterval(timerfunction, 1000);
    playClueSequence();
  
}
function stopGame(){
    gamePlaying = false;
    clearInterval(timer);
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 100
  
}
function timerfunction(){
  if(timeLeft > -1){
    document.getElementById("time").innerHTML = "You have " + timeLeft-- + " seconds left";
  }
  else{
    clearInterval(timer);
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 220.6,
  2: 300.6,
  3: 380,
  4: 450.2,
  5: 500.2
}
function playTone(btn,len){ 
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  //context.resume()
  document.getElementById("audio" + btn).play();
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    /*context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume() */
    document.getElementById("audio" + btn).pause();
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("image"+btn).classList.remove("hidden");
  
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("image"+btn).classList.add("hidden");
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
 if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    counter++;
    progress++;
    playClueSequence();
    if(counter==3){
      loseGame();
    }
  }
}
//Function to display image when button is pressed
function showImage(btn) {
  document.getElementById("image"+btn).classList.remove("hidden");
}

//Function to hide image when button is released
function hideImage(btn) {
  document.getElementById("image"+btn).classList.add("hidden");
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

