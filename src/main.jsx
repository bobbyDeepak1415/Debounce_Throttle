// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

console.log("hello")


function countStudents(students, sandwiches) {
  for (let i = 0; i <= students.length; i++) {
    let student = students[i];
    for (let j = 0; j <= sandwiches.length; j++) {
      let sandwich = sandwiches[j];
      if (sandwich !== student) {
        let item = students.shift();
        students.push(item);
        students.splice(0, 1);
      }
      students.shift();
      sandwiches.shift();
    }
  }
  return students.length;
}

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
