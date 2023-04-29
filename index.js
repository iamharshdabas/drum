let drum = document.querySelectorAll('.drum');

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener('click', function () {
    switch (this.innerText) {
      case 'w':
        let audio_w = new Audio('sounds/tom-0.mp3');
        audio_w.play();
        break;
      case 'a':
        let audio_a = new Audio('sounds/tom-1.mp3');
        audio_a.play();
        break;
      case 's':
        let audio_s = new Audio('sounds/tom-2.mp3');
        audio_s.play();
        break;
      case 'd':
        let audio_d = new Audio('sounds/tom-3.mp3');
        audio_d.play();
        break;
      case 'j':
        let audio_j = new Audio('sounds/tom-4.mp3');
        audio_j.play();
        break;
      case 'k':
        let audio_k = new Audio('sounds/tom-5.mp3');
        audio_k.play();
        break;
      case 'l':
        let audio_l = new Audio('sounds/tom-6.mp3');
        audio_l.play();
        break;
      default:
        break;
    }
  })
}
