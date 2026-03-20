// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

function displayNums(students, sandwiches) {

  let rotations=0

  while(students.length&rotations<students.length){
    if(students[0]!==sandwiches[0]){
      students.push(students.shift())
      rotations++
    }else{
      students.shift()
      sandwiches.shift()
    }
  }



}

console.log(displayNums([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
// console.log(displayNums([1, 1, 0,0], [ 0, 1, 0,  1]));
