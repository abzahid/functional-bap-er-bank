//Use this function to get the inputfield value
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;


}

//Use this function to get the element value
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//Use this function to set the element value

function setElementValuebyId(elementId, newValue) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    element.innerText = newValue;
}