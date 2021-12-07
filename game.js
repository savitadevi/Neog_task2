readlineSync=require('readline-sync');
question_list=["1.what is the capital of Himachal?","2.Who is the Chief Minister of Himachal ?","How many district in Himachal ?","4.famous food of Himachal  ?"]
option_list=[["1.Dharamshala & Shimla","2. una","3.Uttrakhand","4. Banglore"],["1.Ram nath covind","2. jay Ram Thakur","3.Javaher Lal Nehru","4.Indra Ghandi"],["1.Twelve","2.Thirty-Four","3.fiffty","4.Twenty-nine"],["1.Four","2.Nine","3.Kangri dham","4.Six"]]
solu_list=[1,2,1,3]
var i=0;
while(i<question_list.length){
  console.log(question_list[i])
  var j=0;
  while(j<option_list[i].length){
    console.log("    ",option_list[i][j])
    j++;
    }
  var solution=readlineSync.question("enter the solution");
  if(solution==solu_list[i]){
    console.log("congrats your next question is")
  }
  else{
    console.log("your answer is wrong");
    break
  }
  i++;
  }