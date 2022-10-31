const choices = ['Rock','Paper','Scissors'];
const score = [0,0,0];  // [win,loss,round count]

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
};
function play(player,Computer){
    if(!choices.includes(player)) {return 'invalid choice'};
    if (player==Computer){ return 0}
    switch([player,Computer].toString()){
        case [choices[0],choices[1]].toString():{
            return -1;}
        case [choices[1],choices[2]].toString():{
            return -1;}
        case [choices[2],choices[0]].toString():{
            return -1;}
        default:{
            return 1;}
    }
}
function startGame(playerSelection,computerSelection){
    let result;
    playerSelection = playerSelection || 'invalid';
    result = play(playerSelection, computerSelection);
    updateEmoji(computerSelection,playerSelection);
    score[2]++;
    if(result>0){
        score[0]++;
        updateStatus(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (result<0) {
        score[1]++;
        updateStatus(`You lose. ${computerSelection} beats ${playerSelection}.`);
    } else if (result===0){
        updateStatus(`Draw! You both picked ${playerSelection}`);
    } else {
        updateStatus(result);
    }
    if (score[2]<5){
        titleUpdate(`Round ${score[2]} results:`);
        return true;
    }
    if (score[0]>score[1]){
        titleUpdate('You are the winner.');
        updateStatus(`Out of 5 rounds, you have won ${score[0]} rounds
        and lost ${score[1]} rounds.`);
        score.splice(0,3,0,0,0)
        return true;
    } else if (score[0]<score[1]) {
        titleUpdate('Try Again :(');
        updateStatus(`Out of 5 rounds, you have lost ${score[1]} rounds
        and won ${score[0]} rounds`);
        score.splice(0,3,0,0,0)
        return true;
    } else {
        titleUpdate(`It's a draw.`);
        updateStatus(`Out of 5 rounds, you have won ${score[0]} rounds
        and lost ${score[1]} rounds.`);
        score.splice(0,3,0,0,0)
        return true;
    }
}
function updateStatus(news){
    document.getElementById('status').textContent = news;
    return true;
}
function titleUpdate(title){
    document.querySelector('.title').textContent = title;
    return true;
}
function updateEmoji(left,right){
    let emoji = document.querySelector('.emoji');
    let playerEmoji = document.createElement('button');
    playerEmoji.className = 'playerEmoji';
    playerEmoji.textContent = document.querySelector('.'+right).textContent;
    emoji.textContent = document.querySelector('.'+left).textContent +' | ' 
    emoji.appendChild(playerEmoji);
}

for(let button of document.querySelectorAll('.button-container > button')){
    button.addEventListener('click',(e)=>{
        startGame(e.target.className,getComputerChoice())
    })}