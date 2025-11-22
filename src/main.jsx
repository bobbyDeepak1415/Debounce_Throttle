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

const typedTimes = 0;
const runTimes = 0;


const myDebounce=(func,delay)=>{

  let timer=0

  return function(){
    clearTimeout(timer)
    setTimeout(()=>{

    },delay)
  }

}



const debounceFunc=myDebounce(()=>{
run.innerHTML += runTimes;
},1500)


input.addEventListener("input", () => {
  typed.innerHTML += typedTimes;
  debounceFunc()
  
});
