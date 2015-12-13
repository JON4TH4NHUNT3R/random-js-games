var userChoice;
var computerChoice;
var getReplay = true;

while(getReplay){
    computerChoice = Math.random();
    
    if(computerChoice < 0.34){
        computerChoice = "rock";
    }else if(computerChoice <= 0.67){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    };
    
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors") {
        userChoice = prompt("Please enter either rock, paper or scissors");
    }

    alert("Computer: " + computerChoice);
    alert("You: " + userChoice);
    
    var compare = function(choice1, choice2){
    if(choice1 === choice2){
            return("The result is a tie.");
    }else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return("rock wins");
        }else{
            return("paper wins");
        };
    }else if(choice1 === "scissors"){
        if(choice2 === "rock") {
            return("rock wins");
        }else{
            return("scissors wins");
        };
    }else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return("paper wins");
        }else{
            return("scissors wins");
        };
        };
    };
    
var s = compare(userChoice,computerChoice);
alert (s)
        
if(confirm("Do you want to play again ?")){
getReplay = true;
}else{
getReplay = false;    
};
};