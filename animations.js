const btnDis = document.querySelector('#clickme');
btnDis.addEventListener("click", (event) => {
  btnDis.classList.add("disabled");
  btnDis.innerHTML = "Let's Go!";
  const audio = new Audio('files/sound.mp3');
  audio.play();
});
