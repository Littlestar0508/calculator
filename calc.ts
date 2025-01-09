const buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
const operation = document.querySelector(".operation") as HTMLSpanElement;
const output = document.querySelector(".output") as HTMLOutputElement;
const resetButton = document.querySelector(".ac") as HTMLButtonElement;
const eventButtons: Array<HTMLButtonElement> = Array.from(buttons);
const calc = document.querySelectorAll(".opt") as NodeListOf<HTMLButtonElement>;
const calcSet: Array<HTMLButtonElement> = Array.from(calc);
let result = 100;
let cur: string = "";
const arr: string[] = [];

eventButtons.map((idx: HTMLButtonElement) => {
  idx.addEventListener("click", insertNumber);
});

resetButton.addEventListener("click", resetAll);
calcSet.map((idx: HTMLButtonElement) => {
  idx.addEventListener("click", calcNumber);
});

function resetAll() {
  operation.textContent = "0";
  output.textContent = "0";
  result = 0;
}

function insertNumber(e: MouseEvent) {
  const target = e.target as HTMLButtonElement;

  if (target.dataset.num) {
    changeInputNumber(target.dataset.num);
  }
}

function changeInputNumber(newInput: string) {
  if (operation.textContent === "0") {
    operation.textContent = newInput;
  } else {
    operation.textContent += newInput;
  }
  cur += newInput;
  console.log(cur);
}

function calcNumber(e: MouseEvent) {
  const title: string = (e.target as HTMLButtonElement).title;

  switch (title) {
    case "양수, 음수 전환":
      console.log(1);
      break;
    case "계산":
      output.textContent = String(result);
  }
}

function chkBeforeCalc() {
  if (arr.length !== 0) {
  }
}
