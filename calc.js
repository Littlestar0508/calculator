var buttons = document.querySelectorAll("button");
var operation = document.querySelector(".operation");
var output = document.querySelector(".output");
var resetButton = document.querySelector(".ac");
var eventButtons = Array.from(buttons);
var calc = document.querySelectorAll(".opt");
var calcSet = Array.from(calc);
var result = 100;
var cur = "";
var arr = [];
eventButtons.map(function (idx) {
    idx.addEventListener("click", insertNumber);
});
resetButton.addEventListener("click", resetAll);
calcSet.map(function (idx) {
    idx.addEventListener("click", calcNumber);
});
function resetAll() {
    operation.textContent = "0";
    output.textContent = "0";
    result = 0;
}
function insertNumber(e) {
    var target = e.target;
    if (target.dataset.num) {
        changeInputNumber(target.dataset.num);
    }
}
function changeInputNumber(newInput) {
    if (operation.textContent === "0") {
        operation.textContent = newInput;
    }
    else {
        operation.textContent += newInput;
    }
    cur += newInput;
    console.log(cur);
}
function calcNumber(e) {
    var title = e.target.title;
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
