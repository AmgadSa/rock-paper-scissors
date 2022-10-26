const choices = ['Rock','Paper','Scissors'];

function getComputerChoice() {
    return choices[Math.round(Math.random()*2)];
};
function play(playerSelection,ComputerSelection){
    playerSelection = playerSelection[0].toUpperCase().concat(playerSelection.substr(1).toLowerCase());
    if(!choices.includes(playerSelection)) {return 'invalid choice'};
    if (playerSelection==ComputerSelection){ return 0}
    else {
    switch(playerSelection){
        case choices[0]:
            if(ComputerSelection == choices[1]){ return -1};
        case choices[1]:
            if(ComputerSelection == choices[2]){ return -1};
        case choices[2]:
            if(ComputerSelection == choices[0]){ return -1};
        default:
            return 1 ;
    }}
}
function game(){
    let score = [0,0];
    let result;
    let playerSelection;
    let computerSelection;
    for(let i=0 ; i<5;i++){
        playerSelection = prompt('Choose Rock, Paper or Scissors: ') || 'invalid'
        computerSelection = getComputerChoice();
        result = play(playerSelection, computerSelection);
        if(result>0){
            score[0]++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (result<0) {
            score[1]++;
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
        } else if (result===0){
            console.log(`Draw! You both picked ${playerSelection}`);
        } else {
            console.log(result);
        }
    }
    if (score[0]>score[1]){
        return `You are the winner. You won ${score[0]} out of 5 rounds`
    } else if (score[0]<score[1]) {
        return `Try again. You have lost ${score[1]} out of 5 rounds.`
    } else {
        return `It's a draw.`
    }
}
