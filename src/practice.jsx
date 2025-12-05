const button = document.querySelector("button");
const clicked = document.getElementById("clicked_Times");
const funcRun = document.getElementById("funcRun_Times");

let clickedTimes = 0;
let runTimes = 0;

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  funcRun.innerHTML = ++runTimes;
});
