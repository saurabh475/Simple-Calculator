let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    document.getElementById('result').value = currentInput;
}

function operate(operator) {
    currentInput += operator;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
