var readlineSync=require('readline-sync');
var score=0;
 function play(question,answer){
   var userAnswer=readlineSync.question(question);
   if (userAnswer==answer){
     console.log("you are right");
     score=score+1
   }
   else{
     console.log("you are wrong");
     score=score-1
   }

 }
play("Where  do  I work  ","Microsoft")
play("Where do I live  ","Himachal")
console.log("your score is",score)


