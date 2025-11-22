// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const button = document.querySelector("button");
const clicked = document.getElementById("clicked_Times");
const run = document.getElementById("funcRun_Times");

let clickedTimes = 0;
let runTimes = 0;

const myThrottle = (func, delay) => {
  let lastRun = 0;

  let now = Date.now();

  return function () {
    if (now - lastRun > delay) {
      lastRun = now;
      func();
    }
  };
};

const throttleFunc = myThrottle(() => {
  run.innerHTML = ++runTimes;
}, 1500);

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  throttleFunc();
});
