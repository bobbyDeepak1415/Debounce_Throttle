

const btn=document.querySelector("button")

let clicked=document.getElementById("clicked_Times")
let run=document.getElementById("funcRun_Times")

let clickedTimes=0
let runTimes=0

clicked.innerText=clickedTimes
run.innerText=runTimes



const myDebounce=(func,delay)=>{
  
  let timer=0
  
  return function(...args){
    clearTimeout(timer)
    timer=setTimeout(()=>{
      func(...args)
    },delay)
  }
  
}


const debounceFunc=myDebounce(()=>{
  runTimes++
  run.innerText=runTimes
  
},1500)


btn.addEventListener("click",()=>{
  clickedTimes++
  clicked.innerText=clickedTimes

  debounceFunc()



})
























// import React, { useEffect, useState } from 'react'

// const Practice = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//    const id=setInterval(() => {
//       setCount(prev=>prev+1);
//     }, 1000);

//     return ()=>clearInterval(id)

//   }, []);

//   return <div>count at:{count}
  
//   </div>;
// }

// export default Practice
