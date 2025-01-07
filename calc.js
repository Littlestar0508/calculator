var buttons = document.querySelectorAll("button");
var operation = document.querySelector(".operation");
var output = document.querySelector(".output");
var eventButtons = Array.from(buttons);
eventButtons.map(function (idx) {
    idx.addEventListener("click", function (e) {
        var target = e.target;
        var targetText = target.textContent;
        if (!isNaN(Number(targetText))) {
            switch (Number(targetText)) {
                case 1:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 1;
                    break;
                case 2:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 2;
                    break;
                case 3:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 3;
                    break;
                case 4:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 4;
                    break;
                case 5:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 5;
                    break;
                case 6:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 6;
                    break;
                case 7:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 7;
                    break;
                case 8:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 8;
                    break;
                case 9:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 9;
                    break;
                case 0:
                    operation === null || operation === void 0 ? void 0 : operation.textContent += 0;
                    break;
            }
        }
    });
});
