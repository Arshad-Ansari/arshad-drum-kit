function playsound(e){



const audioo=document.querySelector(`audio[data-key="${e.key}"]`);
const one=document.querySelector(`.one[data-key="${e.key}"]`);
console.log(audioo);
if(!audioo) return;
audioo.currentTime=0;
audioo.play();
one.classList.add('glow');
    
}


function removeTransiton(e)
{
 if(e.propertyName!=='transform')return;
 this.classList.remove('glow');
 

}

const keys=document.querySelectorAll('.one');
keys.forEach(one=>one.addEventListener('transitionend',removeTransiton));
window.addEventListener('keypress',playsound);