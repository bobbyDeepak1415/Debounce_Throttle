

const btn=document.querySelector("button")



const clicked=document.getElementById("clicked_times")
const run=document.getElementById("funcRun_Times")

let clickedTimes=0
let runTimes=0

clicked.innerText=clickedTimes
run.innerHTML=runTimes






btn.addEventListener("click",()=>{
  console.log("hello")
  clickedTimes+=1
  runTimes+=1
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
