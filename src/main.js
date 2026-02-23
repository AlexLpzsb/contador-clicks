import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="reset" type="button">Reset</button>
    </div>
  </div>
`;

setupCounter(
  document.querySelector('#counter'), 
  document.querySelector('#reset')
);