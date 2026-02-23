export function setupCounter(element) {
  let counter = 0;
  const audio = new Audio('/click.mp3');
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
    audio.currentTime = 0; 
    audio.play();
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}