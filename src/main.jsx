// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import './index.css'
// // import App from "./App.jsx";
// import Practice from "./Practice.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Practice/>
//   </StrictMode>,
// );

const button = document.querySelector("button");
const clicked = document.getElementById("clicked_Times");
const run = document.getElementById("funcRun_Times");

let clickedTimes = 0;
let runTimes = 0;


const myDebounce=(func,delay)=>{
let timer=0

return 



}


const debouncFunc = myDebounce(() => {
  run.innerHTML = ++runTimes;
},1000)

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  debouncFunc();
});


