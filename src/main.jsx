// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const input = document.querySelector("input");
const typed = document.querySelector("#typed_Times");
const run = document.querySelector("#funcRun_Times");

let typedTimes = 0;
let runTimes = 0;

const myDebounce = (func, delay) => {
  let timer = 0;

  return function (...args) {
    clearTimeout(timer);
    timer=setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounceFunc = myDebounce(() => {
  // run.innerHTML = runTimes++;
  run.innerHTML = ++runTimes;
}, 2000);

input.addEventListener("input", () => {
  typed.innerHTML =typedTimes++;
  debounceFunc();
});
