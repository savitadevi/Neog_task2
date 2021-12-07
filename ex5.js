var readlinceSync=require('readline-sync')
var myAge=readlinceSync.question("your age is more then 25?")
console.log("you entered "+myAge)
if (myAge>25){
  console.log("you are right");
}else{
  console.log("you are wrong")

}
