// Append value to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete last character from display
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
    let display = document.getElementById("display").value;
    try {
        let result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}