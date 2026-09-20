// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import './index.css'
// import App from "./App.jsx";
// import Practice from "./Practice.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//     {/* <Practice/> */}
//   </StrictMode>,
// );

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");