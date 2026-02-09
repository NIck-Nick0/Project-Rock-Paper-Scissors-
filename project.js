function getComputerChoice(){

num = 3*(Math.random()) ;
if (num > 0 && num < 1){
    return 1
}
else if (num > 1 && num < 2) {return 2}
else {return 3}
}

let humanScore = 0;
let computerScore = 0;







function getHumanChoice(){
x=window.prompt("enter number 1 for Rock 2 for Paper 3 for Scissors")
if (x != 1 && x != 2 && x != 3 ){
    console.log("wrong choes")}
    
return x
}






let HumanChoice ;
let ComputerChoice ;





function playRound (){


HumanChoice = getHumanChoice() ; 
ComputerChoice = getComputerChoice() ;

console.log(HumanChoice)  
console.log(ComputerChoice)  


if (HumanChoice == 1 && ComputerChoice == 1 ){
return 0 
}
else if (HumanChoice == 1 && ComputerChoice == 2 ){
return -1 }

else if (HumanChoice == 1 && ComputerChoice == 3 ){
return 1 }



else if (HumanChoice == 2 && ComputerChoice == 1 ){
return 1 }

else if (HumanChoice == 2 && ComputerChoice == 2 ){
return 0 }

else if (HumanChoice == 2 && ComputerChoice == 3 ){
return -1 }




else if (HumanChoice == 3 && ComputerChoice == 1 ){
return -1 }

else if (HumanChoice == 3 && ComputerChoice == 2 ){
return 1 }

else if (HumanChoice == 3 && ComputerChoice == 3 ){
return 0 }


}







let score ;

function getscore ()
{
score = playRound () ;

if (score == 1 ){
humanScore = humanScore + 1 
}
else if (score == -1 ){
computerScore = computerScore + 1 
}
console.log ("your score is " +humanScore+ " bot score is "+computerScore)
}



for (let i = 0; i < 5; i++) {
getscore () ; 

}

