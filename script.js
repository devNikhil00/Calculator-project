let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', (e) => handleInput(e.target.innerHTML));
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } else if (key === "Escape") {
    string = "";
    input.value = "";
  } else if (/[\d+\-*/.%]/.test(key)) {
    string += key;
    input.value = string;
  }
});

function handleInput(value) {
  if (value === '=') calculate();
  else if (value === 'AC') {
    string = "";
    input.value = "";
  }
  else if (value === 'DEL') {
    string = string.slice(0, -1);
    input.value = string;
  }
  else {
    string += value;
    input.value = string;
  }
}

function calculate() {
  try {
    string = eval(string);
    input.value = string;
  } catch {
    input.value = "Error";
    string = "";
  }
}
