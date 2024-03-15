'use strict';

const model= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const CloseModel= document.querySelector('.close-modal');
const ShoeModel= document.querySelectorAll('.show-modal');

const OpnModel= function(){
   model.classList.remove('hidden')
   overlay.classList.remove('hidden');
}
 
//  console.log(ShoeModel);
 for(var i=0; i<ShoeModel.length; i++){
    ShoeModel[i].addEventListener('click',OpnModel);
 }

 const CloseModelFnc = function(){
   // alert()
    model.classList.add('hidden');
    overlay.classList.add('hidden');
 }

 CloseModel.addEventListener('click', CloseModelFnc)
 overlay.addEventListener('click',CloseModelFnc)


document.addEventListener('keydown', function(e){
   // console.log(e);
   if(e.key === 'Escape' && !model.classList.contains('hidden')){
         CloseModelFnc();
         console.log(e);
   }
})

