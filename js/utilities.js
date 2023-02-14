
/* This Function Called Only Input Field Id and Take Value. It's return as a Integer Number.
   After taking this input value this input field automatically clean. */

function getInputFieldValueByID(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldAmount;
}


/* This Function Use Previous Element Value ID For Taking Previous Amount and return Integer Number. */

function getElementValueById(elementID) {
    const oldElementValue = document.getElementById(elementID);
    const oldElementValueString = oldElementValue.innerText;
    const oldElementTotal = parseFloat(oldElementValueString);
    return oldElementTotal;
}


/* This Function take previousElementValueId and new Updated Amount then set this as a String. */

function setTextElementValueById(elementID, newValue) {
    const updateElementAmount = document.getElementById(elementID);
    updateElementAmount.innerText = newValue;
}