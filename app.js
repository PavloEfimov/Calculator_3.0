let display = document.querySelector("#display");
let sign = document.querySelector("#sign");
let operations = document.querySelector("#operations");
let service_btn = document.querySelector("#service_btn");

let inputs = document.querySelectorAll("input");

let currentValue = 0;
let prevValue = 0;
let prevValueC = 0;
let prevOperation = "";
let operationBul = false;

const regexp = /\.\d\d\d/;

let checkNumber = function (value) {
  if (
    value == 0 ||
    value == 1 ||
    value == 2 ||
    value == 3 ||
    value == 4 ||
    value == 5 ||
    value == 6 ||
    value == 7 ||
    value == 8 ||
    value == 9
  )
    return true;
};

// let fnMinus = function(){
//   currentValue = -currentValue;
//   display.textContent = currentValue;
// };

let fnInput = function (e) {
  if (
    (checkNumber(e.target.value) || e.target.value == ".") &&
    String(currentValue).length < 8
  ) {
    if (e.target.value !== ".") {
      if (!display.textContent.includes(".")) {
        // display.textContent = display.textContent + String(e.target.value);
        currentValue = currentValue * 10 + +e.target.value;
        display.textContent = currentValue;
      } else {
        // question!
        if (!regexp.test(display.textContent)) {
          if (!operationBul) {
            display.textContent = display.textContent + String(e.target.value);
            currentValue = Number(display.textContent);
          } else {
            currentValue = +e.target.value;
            display.textContent = currentValue;
          }
        }
      }

      // currentValue = currentValue * 10 + +e.target.value;
      // display.textContent = currentValue;
    } else {
      if (!display.textContent.includes(".")) {
        display.textContent = display.textContent + String(e.target.value);
      }
    }

    operationBul = false;
  }
  // currentValue = Number(display.textContent);
};

let fnOperations = function (e) {
  if (e.target.value == ".") return;
  operationBul = true;
  if (e.target.value == "+") {
    if (!prevOperation) {
      prevValue = currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "+";
    } else if (prevOperation == "+") {
      prevValueC = prevValue;
      prevValue = prevValue + currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "+";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "-") {
      prevValueC = prevValue;
      prevValue = prevValue - currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "+";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "/") {
      prevValueC = prevValue;
      prevValue = Math.round((prevValue * 1000) / currentValue) / 1000;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "+";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "=") {
      display.textContent = prevValue;
      prevOperation = "+";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    }
  } else if (e.target.value == "-") {
    if (!prevOperation) {
      prevValue = currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "-";
    } else if (prevOperation == "+") {
      prevValueC = prevValue;
      prevValue = prevValue + currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "-";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "-") {
      prevValueC = prevValue;
      prevValue = prevValue - currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "-";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "/") {
      prevValueC = prevValue;
      prevValue = Math.round((prevValue * 1000) / currentValue) / 1000;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "-";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "=") {
      display.textContent = prevValue;
      prevOperation = "-";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    }
  } else if (e.target.value == "/") {
    if (!prevOperation) {
      prevValue = currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "/";
    } else if (prevOperation == "+") {
      prevValueC = prevValue;
      prevValue = prevValue + currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "/";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "-") {
      prevValueC = prevValue;
      prevValue = prevValue - currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "/";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "/") {
      prevValueC = prevValue;
      prevValue = Math.round((prevValue * 1000) / currentValue) / 1000;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "/";
    } else if (prevOperation == "=") {
      display.textContent = prevValue;
      prevOperation = "/";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    }
  } else if (e.target.value == "=") {
    if (!prevOperation) {
      prevValue = currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "=";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "+") {
      prevValueC = prevValue;
      prevValue = prevValue + currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "=";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "-") {
      prevValueC = prevValue;
      prevValue = prevValue - currentValue;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "=";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "/") {
      prevValueC = prevValue;
      prevValue = Math.round((prevValue * 1000) / currentValue) / 1000;
      currentValue = 0;
      display.textContent = prevValue;
      prevOperation = "=";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    } else if (prevOperation == "=") {
      display.textContent = prevValue;
      prevOperation = "=";
      if (display.textContent.length > 8) {
        display.textContent = "ERR";
        currentValue = 0;
        prevValue = 0;
        prevValueC = 0;
        prevOperation = "";
        operationBul = false;
      }
    }
  }
};

let fnservice_btn = function (e) {
  if (e.target.value == "C") {
    if (operationBul) {
      prevOperation = "";
      currentValue = prevValue;
      prevValue = prevValueC;
      prevValueC = 0;
    } else {
      currentValue = 0;
      display.textContent = "";
    }
  } else if (e.target.value == "AC") {
    display.textContent = "";
    currentValue = 0;
    prevValue = 0;
    prevValueC = 0;
    prevOperation = "";
    operationBul = false;
  } else if (e.target.value == "+/-") {
    if (prevOperation == "=") {
      prevValue = -prevValue;
      display.textContent = prevValue;
    } else {
      currentValue = -currentValue;
      display.textContent = currentValue;
    }
  }
};

inputs.forEach((input) => input.addEventListener("click", fnInput));
operations.addEventListener("click", fnOperations);
service_btn.addEventListener("click", fnservice_btn);
