const display = document.querySelector(".tasbeh__display");
const btnCounter = document.querySelector(".btn__counter");
const btnReset = document.querySelector(".btn__reset");
const btnOn = document.querySelector(".btn__on");
const btnOff = document.querySelector(".btn__off");
const period = document.querySelector(".period");

let a = "";
let b = 0;
let count = 0;
let on = false;

btnOn.addEventListener("click", () => {
  if (a === "" && count === 0 && on === false) {
    on = true;
    display.textContent = 0;
    period.textContent = b;   
  }
});

btnCounter.addEventListener("click", () => {
  if (on) {
    count++;
    a = count;
    display.textContent = a;
    if (count > 33) {
      count = 0;
      a = count;
      display.textContent = a;
      b++;
      period.textContent = b;
    }
  } 
  
});

btnReset.addEventListener("click", () => {
  if (a !== "" && on !== false) {
    a = "";
    count = 0;
    display.textContent = 0;
    b = 0;
    period.textContent = b;
  }
});

btnOff.addEventListener("click", () => {
  display.textContent = "";
  a = "";
  count = 0;
  on = false;
  b = 0;
  period.textContent = '';
});
