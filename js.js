var play_game = function(player){
var choice = player;
var compnum = Math.random();
var compchoice = "null";
if (compnum < 1 / 3) {
    compchoice = "Rock";
} else if (compnum < 2 / 3) {
    compchoice = "Scissors";
} else {
    compchoice = "Paper";
}
console.log("You = " + choice + "   Computer = " + compchoice);
if (compchoice == choice) {
    console.log("Tie");
    return "Tie";
} else if (compchoice == "Rock" && choice == "Paper") {
    console.log("You Win");
    return "You Win";
} else if (compchoice == "Scissors" && choice == "Rock") {
    console.log("You Win");
    return "You Win";
} else if (compchoice == "Paper" && choice == "Scissors") {
    console.log("You Win");
    return "You Win";
} else {
    console.log("You Lose");
    return "You Lose";
}
};

var totalmoney = 100;
var bet = 10;
var wins = 0;
var losses = 0;
var ties = 0;
var hands = ["Paper", "Rock","Scissors"];
for(var i = 0; i < 100; i++){//noprotect
var game = play_game("Rock");
if(game == "You Lose"){
  losses++;
  totalmoney-=bet;
}
else if(game == "You Win")
{
  wins++;
  totalmoney+=bet;
}
else{ties++;}

}
console.log("total money is $"+totalmoney);
console.log("total wins is "+wins);
console.log("total losses is "+losses);
console.log("total ties is "+ties);
console.log("--------------------------------");