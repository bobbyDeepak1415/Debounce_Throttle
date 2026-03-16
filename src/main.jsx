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

  return students.length & sandwiches;
}

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
