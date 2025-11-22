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
const typed = document.getElementById("typed_Times");
const run = document.getElementById("funcRun_Times");

const typedTimes = 0;
const runTimes = 0;

input.addEventListener("input", () => {
  typed.innerHTML += typedTimes;
  run.innerHTML += runTimes;
});
