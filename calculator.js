// CALCULATOR PROGRAM

const display = document.querySelector("#display");
const appendToDisplay = (input) => {
    display.value += input;
};

const clearDisplay = () => {
    display.value = " ";
};

function calculate() {
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value = "Syntax error";
    }
}

const deleteDisplay = () => {
    console.log(display.value.length-1)
}