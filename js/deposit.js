
document.getElementById('btn-deposit').addEventListener('click', function () {

    /*

    // Taka Input Deposit Value Using getInputFieldValueByID Function.
    const inputFieldAmount = getInputFieldValueByID('deposit-field');

    // Take Previous Amount From Deposit section Using getElementValueById.
    const previousDepositAmount = getElementValueById('deposit-total');

    // Calculate total Deposit Amount.
    const totalDepositAmount = inputFieldAmount + previousDepositAmount;

    // update total deposit amount using setTextElementValueById function.
    setTextElementValueById('deposit-total', totalDepositAmount);


    // Take previous Balance Amount using getElementValueById function.
    const previousBalanceAmount = getElementValueById('balance-total');

    // Calculate total Balance Amount
    const totalBalanceAmount = previousBalanceAmount + inputFieldAmount;

    // update total Balance amount using setTextElementValueById function.
    setTextElementValueById('balance-total', totalBalanceAmount);

    */


    //-----------------------------------------------------------------------





    // Taka Input Deposit Value Using getInputFieldValueByID Function.
    const inputFieldAmount = getInputFieldValueByID('deposit-field');

    // Take Previous Amount From Deposit section Using getElementValueById.
    const previousDepositAmount = getElementValueById('deposit-total');

    // Take previous Balance Amount using getElementValueById function.
    const previousBalanceAmount = getElementValueById('balance-total');

    // Calculate total Deposit Amount.
    const totalDepositAmount = inputFieldAmount + previousDepositAmount;

    // Calculate total Balance Amount
    const totalBalanceAmount = previousBalanceAmount + inputFieldAmount;


    // Validation And Error Handling

    if (isNaN(inputFieldAmount) || inputFieldAmount < 0) {
        alert("Input Valid Number")
    } else {
        // update total deposit amount using setTextElementValueById function.
        setTextElementValueById('deposit-total', totalDepositAmount);

        // update total Balance amount using setTextElementValueById function.
        setTextElementValueById('balance-total', totalBalanceAmount);
    }













});