class Quiz {
  constructor(){}

  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();


    //write code to change the background color here
background("lightblue")

    //write code to show a heading for showing the result of Quiz
    fill("black")
    textSize(35)
    text("Results",350,45)

    //call getContestantInfo( ) here
Contestant.getPlayerInfo();

    //write condition to check if allContestants is not undefined
if(allContestants !== undefined){
  var yposition = 230
  fill("black")
  textSize(20)
  text("*NOTE: Contestant who answered correctly are highlighted in GREEN*",120,230)
    
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("green")
    }else {
        fill("red")
  }

  yposition = yposition + 25
  text(allContestants[plr].name + ": " + allContestants[plr].answer, 280, yposition);
  //name1 : answer
  //name2 : answer
}
}
}
}