const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operator) {
  if (num1Input.value === "" || num2Input.value === "") {
    result.textContent = "Enter both numbers";
    return;
  }

  const a = Number(num1Input.value);
  const b = Number(num2Input.value);

  if (operator === "+") {
    result.textContent = a + b;
  } else if (operator === "-") {
    result.textContent = a - b;
  } else if (operator === "*") {
    result.textContent = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result.textContent = "Cannot divide by zero!";
    } else {
      result.textContent = a / b;
    }
  }
}

document.getElementById("addBtn").addEventListener("click", function () {
  calculate("+");
});

document.getElementById("subBtn").addEventListener("click", function () {
  calculate("-");
});

document.getElementById("mulBtn").addEventListener("click", function () {
  calculate("*");
});

document.getElementById("divBtn").addEventListener("click", function () {
  calculate("/");
});
