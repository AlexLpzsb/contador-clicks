import './style.css';
import { setupCounter } from './counter.js';
import { person, sayHello } from './modules.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));

console.log(person);
sayHello();