

var go = function(type){
var user = type
var comp = Math.random();


if (comp < 0.33){comp = 'Rock';
}
else if (comp < 0.66){comp = 'Scissors'}
else {comp = 'Paper';}
var text;
if(comp == user)
{text = "Tie";
document.getElementById('ties').innerHTML = Number(document.getElementById('ties').innerHTML)+  1;

}
else if ((comp == 'Rock' && user == 'Paper') || (comp == 'Paper' && user == 'Scissors') || (comp == 'Scissors' && user == 'Rock'))
{text = "You Win";
document.getElementById('wins').innerHTML = Number(document.getElementById('wins').innerHTML)+  1;
}
else{
text = "You lose";
document.getElementById('loses').innerHTML =Number(document.getElementById('loses').innerHTML)+  1;
}

document.getElementById('play').innerHTML = "You played "+ user +". Computer played "+comp+". " + text;
}

document.getElementById('Rock').addEventListener("click",function (){go("Rock");});
document.getElementById('Paper').addEventListener("click",function (){go("Paper");});
document.getElementById('Scissors').addEventListener("click",function (){go("Scissors");});
