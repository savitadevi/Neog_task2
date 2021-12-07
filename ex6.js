var readlinceSync=require('readline-sync')
var score=0;
var myAge=readlinceSync.question("your age is more then 25?")

console.log("you entered "+myAge)
if (myAge==="yes"){
  console.log("you are right");
  score=score+1;
  console.log("your score"+score)
}else{
  console.log("you are wrong")
  score=score-1;
  console.log("yourscore"+score)
}