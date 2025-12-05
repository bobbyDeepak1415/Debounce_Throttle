const button = document.querySelector("button");
const clicked = document.getElementById("clicked_Times");
const funcRun = document.getElementById("funcRun_Times");

let clickedTimes = 0;
let runTimes = 0;

const myThrottle = (func, interval) => {
  let lastRun = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastRun > interval) {
      lastRun = now;
      func(...args);
    }
  };
};

const throttleFunc = myThrottle(() => {
  funcRun.innerHTML = ++runTimes;
}, 1500);

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;

  throttleFunc();
});
.