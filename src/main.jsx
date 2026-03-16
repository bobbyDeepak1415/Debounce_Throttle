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
  for (let i = 0; i <= students.length; i++) {
    let student = students[i];
    if(student!==sandwiches[0]){

      students.push()

      
    }



    }
  
  return students.length;
}

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
