const button = document.querySelector("button");
const clicked = document.getElementById("clicked_Times");
const funcRun = document.getElementById("funcRun_Times");

let clickedTimes = 0;
let runTimes = 0;

const myDebounce = (func, delay) => {
  let timer = 0;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounceFunc = myDebounce(() => {
  funcRun.innerHTML = ++runTimes;
}, 800);

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;

  debounceFunc();
});
