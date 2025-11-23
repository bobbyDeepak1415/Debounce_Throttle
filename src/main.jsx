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

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  run.innerHTML = ++runTimes;
});


