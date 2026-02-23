export function setupCounter(element, resetElement) {
  let counter = JSON.parse(localStorage.getItem('mi-contador')) || 0;

  const clickAudio = new Audio('/click.mp3');
  const resetAudio = new Audio('/reset.mp3');

  const setCounter = (count, playSound = true) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
    localStorage.setItem('mi-contador', count);
    if (playSound) {
      clickAudio.currentTime = 0;
      clickAudio.play();
    }
  };

  element.addEventListener('click', () => {
    setCounter(counter + 1);
  });

  resetElement.addEventListener('click', () => {
    counter = 0;
    element.innerHTML = `Count is ${counter}`;
    localStorage.setItem('mi-contador', 0);
    resetAudio.currentTime = 0;
    resetAudio.play();
  });
  setCounter(counter, false);
}