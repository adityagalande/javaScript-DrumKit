// alert("YUDI J");
window.addEventListener("keyup", playSound);

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(audio == null) return;

    audio.currentTime=0;
    audio.play();
    // console.log(key);
    key.classList.add('playing');
}

function removeTransition(e) {
  console.log(e);
  if(e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
