let buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
const operation = document.querySelector(".operation") as HTMLSpanElement;
const output = document.querySelector(".output") as HTMLOutputElement;

let eventButtons: Array<HTMLButtonElement> = Array.from(buttons);

eventButtons.map((idx: HTMLButtonElement) => {
  idx.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const targetText = target.textContent;

    if (!isNaN(Number(targetText))) {
      switch (Number(targetText)) {
        case 1:
          operation?.textContent += 1;
          break;
        case 2:
          operation?.textContent += 2;
          break;
        case 3:
          operation?.textContent += 3;
          break;
        case 4:
          operation?.textContent += 4;
          break;
        case 5:
          operation?.textContent += 5;
          break;
        case 6:
          operation?.textContent += 6;
          break;
        case 7:
          operation?.textContent += 7;
          break;
        case 8:
          operation?.textContent += 8;
          break;
        case 9:
          operation?.textContent += 9;
          break;
        case 0:
          operation?.textContent += 0;
          break;
      }
    }
  });
});
