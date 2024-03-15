'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent= 'Currect Number';
// alert()

const DisplayMsg =function(message){
    document.querySelector('.message').textContent=message;
}

let SecretNumber= Math.trunc(Math.random()*20)+1;
let Score=20;
let HighScore=0;
document.querySelector('.check').addEventListener('click',function(){
    var guess=Number(document.querySelector('.guess').value);
    if(!guess){
        // document.querySelector('.message').textContent= 'No Number';
        DisplayMsg('No Number')
    }else if(guess===SecretNumber){
       document.querySelector('.number').textContent=SecretNumber;
         //document.querySelector('.message').textContent= 'Currect Number';
         DisplayMsg('Currect Number')

       document.querySelector('body').style.backgroundColor='#06b347';
       document.querySelector('.number').style.width='30rem';
       if(Score>HighScore){
        HighScore=Score;
       document.querySelector('.highscore').textContent=HighScore;
       ;

       }
    }
    else if(guess!=SecretNumber){

        if(Score>1)
        {
            // document.querySelector('.message').textContent= guess>SecretNumber ? 'Number Is Too High' : 'Number Is Too Low'
            DisplayMsg(guess>SecretNumber ? 'Number Is Too High' : 'Number Is Too Low')

            Score--;
            document.querySelector('.score').textContent=Score
        }
        else
        {
        //   document.querySelector('.message').textContent= 'You Loss The Game';
          DisplayMsg('You Loss The Game')

          document.querySelector('.score').textContent=0

        }
    }
    // else if(guess > SecretNumber){
    //     if(Score>1)
    //     {
    //         document.querySelector('.message').textContent= 'Number Is Too High';
    //         Score--;
    //         document.querySelector('.score').textContent=Score
    //     }
    //     else
    //     {
    //       document.querySelector('.message').textContent= 'You Loss The Game';
    //       document.querySelector('.score').textContent=0

    //     }
    //      //WHEN GUESS IS TOO LOW
    // }else if(guess < SecretNumber){
    //     if(Score>1)
    //     {
    //         document.querySelector('.message').textContent= 'Number Is Too Low';
    //         Score--;
    //         document.querySelector('.score').textContent=Score
    //     }
    //     else{
    //         document.querySelector('.message').textContent= 'You Loss The Game';
    //         document.querySelector('.score').textContent=0

    //     }
    // }
})

document.querySelector('.again').addEventListener('click',function(){
    Score=20;
    SecretNumber= Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent='Start guessing...';
    DisplayMsg('Start guessing...')

    document.querySelector('.score').textContent=Score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#333';
    document.querySelector('.number').style.width='15rem';
})
