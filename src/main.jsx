// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
function countStudents(students, sandwiches) {
  let rotations = 0;
  while (students.length && rotations < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      rotations = 0;
    } else {
      students.push(students.shift());
      rotations++;
    }
  }
  return students.length;
}

// console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

// console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
