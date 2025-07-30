
let score= JSON.parse (localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};
updateScoreElement();

function playGame(playMove){
  const computerMove=pickComputerMove();
  console.log(computerMove);
  let result='';
  if(playMove==='scissor'){
  if(computerMove==='rock'){
  result= 'you lose';
  } else if(computerMove==='paper'){result='you win'; }
  else if(computerMove==='scissor'){result='tie';}
  }

  else if(playMove==='paper'){
  if(computerMove==='rock'){
  result= 'you win';
  } else if(computerMove==='paper'){result='tie'; }
  else if(computerMove==='scissor'){result='you lose';}
  }

  else if(playMove==='rock'){
  if(computerMove==='rock'){
  result= 'tie';
  } else if(computerMove==='paper'){result='you lose'; }
  else if(computerMove==='scissor'){result='you win';}

  }

  if(result==='you win'){
  score.wins+=1;
  }else if(result==='you lose'){
  score.losses+=1;
  }else if(result==='tie'){
  score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));


  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-moves').innerHTML=`You<img src="./images/${playMove}.png" class="move-icon">
  <img src="./images/${computerMove}.png" class="move-icon">Computer`;


}

function updateScoreElement(){ 
  document.querySelector('.js-score')
  .innerHTML=` wins: ${score.wins},
  loses:${score.losses},
  ties:${score.ties}`;
}

function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';

  if(randomNumber>0 && randomNumber<1/3){ computerMove='rock';}
  else if(randomNumber>1/3 && randomNumber<2/3){ computerMove='paper';}
  else if(randomNumber>2/3 && randomNumber<1){ computerMove='scissor';} 
  return computerMove; 
}