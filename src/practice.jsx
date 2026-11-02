

const btn=document.querySelector("button")



const clicked=document.getElementById("clicked_Times")
const run=document.getElementById("funcRun_Times")

let clickedTimes=0
let runTimes=0




btn.addEventListener("click",()=>{
  console.log("hello")
  clickedTimes++
  runTimes++

clicked.innerText=clickedTimes
run.innerText=runTimes


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
