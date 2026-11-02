

const btn=document.querySelector("button")



const clicked=document.getElementById("clicked_Times")
const run=document.getElementById("funcRun_Times")

let clickedTimes=0
let runTimes=0


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

},1500)


btn.addEventListener("click",()=>{
  clickedTimes++

  debounceFunc()

clicked.innerText=clickedTimes
run.innerText=runTimes


})





// now use two functions debounceFunc() and myDebounce() to create a debounce functionality,where the mydebounce has a delay of 2000 ms



















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
