let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.textContent;

    // Clear button
    if (value === 'C') {
      currentInput = '';
      operator = '';
      previousInput = '';
      display.textContent = '0';
      return;
    }

    // Backspace
    if (value === '←') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
      return;
    }

    // Handle operators
    if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput === '' && previousInput !== '') {
        operator = value;
        display.textContent = previousInput + ' ' + operator;
      } else if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = value;
        display.textContent = previousInput + ' ' + operator;
      }
      return;
    }

    // Equals button
    if (value === '=') {
      if (currentInput !== '' && operator !== '') {
        currentInput = evaluate(previousInput, currentInput, operator);
        display.textContent = currentInput;
        operator = '';
        previousInput = '';
      }
      return;
    }

    // Decimal point
    if (value === '.' && currentInput.includes('.')) {
      return;
    }

    // Append number
    currentInput += value;
    display.textContent = currentInput;
  });
});

// Evaluate function
function evaluate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      return (num2 === 0) ? 'Error' : (num1 / num2).toString();
    default:
      return '';
  }
}
