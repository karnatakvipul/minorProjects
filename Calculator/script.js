let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

// Button click support
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Keyboard support with button highlight
document.addEventListener('keydown', (e) => {
    const key = e.key;
    let mappedKey = key;

    if (key === 'Enter') mappedKey = '=';
    if (key === 'Backspace') mappedKey = 'DEL';
    if (key === 'Escape') mappedKey = 'AC';

    handleInput(mappedKey);
    highlightButton(mappedKey);
});

// Handle calculator input logic
function handleInput(value) {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (
        !isNaN(value) || 
        ['+', '-', '*', '/', '.', '%', '00'].includes(value)
    ) {
        string += value;
        input.value = string;
    }
}

// Highlight button that matches the pressed key
function highlightButton(value) {
    arr.forEach(button => {
        if (button.innerHTML === value) {
            button.classList.add('active-key');
            setTimeout(() => {
                button.classList.remove('active-key');
            }, 150);
        }
    });
}
