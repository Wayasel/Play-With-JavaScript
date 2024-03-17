'use strict';

//selecting Element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const Current0El=document.getElementById('current--0')
const Current1El=document.getElementById('current--1')
const Player0El=document.querySelector('.player--0');
const Player1El=document.querySelector('.player--1');1
const diceEl = document.querySelector('.dice');
const BtnNew = document.querySelector('.btn--new');
const BtnRoll = document.querySelector('.btn--roll');
const BtnHold = document.querySelector('.btn--hold');

//Starting Condingon


let CurrentScore,ActivePlayer, Scores, Playing;
const Init=function(){
    score0El.textContent=0;
    score1El.textContent=0;
    Current0El.textContent=0
    Current1El.textContent=0

    CurrentScore=0;
    ActivePlayer=0;
    Scores=[0, 0];
    Playing = true;

    diceEl.classList.add('hidden');
    Player0El.classList.remove('player--winner')
    Player1El.classList.remove('player--winner')
    Player0El.classList.add('player--active')
    Player1El.classList.remove('player--active')
 }
 Init();
const SwithPlayer= function(){
    document.getElementById(`current--${ActivePlayer}`).textContent=0;
    CurrentScore=0;
    ActivePlayer= ActivePlayer===0 ? 1 : 0;
    Player0El.classList.toggle('player--active')
    Player1El.classList.toggle('player--active')
}

//Rolling Dyce Funcality
BtnRoll.addEventListener('click', function(){
    if(Playing){
        //1. Generate a Random Dice Roll
        const Dice= Math.trunc(Math.random()* 6)+1;

        //2. Dispaly Dies
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${Dice}.png`;

        //Check the Roll 1 If True 
        if(Dice!==1){
            CurrentScore+=Dice;
            // Current0El.textContent=CurrentScore;
            document.getElementById(`current--${ActivePlayer}`).textContent=CurrentScore
        }
        else{
        // Switch TO the next Player
        SwithPlayer();
        }
    }
})


BtnHold.addEventListener('click',function(){
    if(Playing){
        Scores[ActivePlayer] += CurrentScore;
        document.getElementById(`score--${ActivePlayer}`).textContent =  Scores[ActivePlayer];

        if(Scores[ActivePlayer]>=100){
            Playing=false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${ActivePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${ActivePlayer}`).classList.remove('player--active');
        }else{
            SwithPlayer();
        }
    }
})

BtnNew.addEventListener('click',Init)
