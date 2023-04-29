document.addEventListener('keypress', (event) => {
  const audio_w = new Audio('sounds/tom-0.mp3');
  const audio_a = new Audio('sounds/tom-1.mp3');
  const audio_s = new Audio('sounds/tom-2.mp3');
  const audio_d = new Audio('sounds/tom-3.mp3');
  const audio_j = new Audio('sounds/tom-4.mp3');
  const audio_k = new Audio('sounds/tom-5.mp3');
  const audio_l = new Audio('sounds/tom-6.mp3');
  switch (event.key) {
    case 'w':
      audio_w.play();
      break;
    case 'a':
      audio_a.play();
      break;
    case 's':
      audio_s.play();
      break;
    case 'd':
      audio_d.play();
      break;
    case 'j':
      audio_j.play();
      break;
    case 'k':
      audio_k.play();
      break;
    case 'l':
      audio_l.play();
      break;
    default:
      break;
  }
  document.querySelector('.' + event.key).classList.add("pressed")
  setTimeout(() => {
    document.querySelector('.' + event.key).classList.remove("pressed")
  }, 126);
})
