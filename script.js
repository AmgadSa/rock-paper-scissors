const choices = ['Rock','Paper','Scissors'];

function getComputerChoice() {
    return choices[Math.round(Math.random()*2)];
};
function play(playerSelection,ComputerSelection){
    playerSelection = playerSelection[0].toUpperCase().concat(playerSelection.substr(1).toLowerCase());
    if(!choices.includes(playerSelection)) {return 'invalid choice'};
    if (playerSelection==ComputerSelection){ return `Draw, You both picked ${playerSelection}`}
    else {
    switch(playerSelection){
        case choices[0]:
            if(ComputerSelection == choices[1]){"You Lose! Paper beats Rock"}
        case choices[1]:
            if(ComputerSelection == choices[2]){"You Lose! Scissors beats Paper"}
        default:
            return `You win ${playerSelection} beats ${ComputerSelection}`;
    }}
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(play(playerSelection, computerSelection));
