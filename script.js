function clearDisplay() {
    document.getElementById("result").value = "";
    document.getElementById("result").disabled = false;
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function appendCharacter(character) {
    let display = document.getElementById("result");
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += character;
}

function calculate() {
    try {
        let expression = document.getElementById("result").value;
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
        document.getElementById("result").disabled = true;
    }
}
