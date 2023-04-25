let drum = document.querySelectorAll('.drum');

for (let i = 0; i < drum.length; i++) {
  let audio = new Audio('sounds/tom-' + i + '.mp3');
  drum[i].addEventListener('click', function () {
    audio.play();
  })
}
