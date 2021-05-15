var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background(rgb(84, 118, 140));

  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    // clear() --> predefined function
    clear();
    quiz.play();
  }
}