// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const button = document.querySelector("button");

const clicked = document.querySelector("#clicked_Times");
const run = document.getElementById("funcRun_Times");

let clickedTimes = 0;
let runTimes = 0;

const myThrottle = (func, delay) => {
  let lastRun = 0;

  return function (...args) {
    let now = Date.now();
    if (now - lastRun > delay) {
      func(...args);
      lastRun = now;
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
