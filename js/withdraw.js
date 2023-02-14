document.getElementById('btn-withdraw').addEventListener('click', function () {

    // Take Input Value From Withdraw Field Using getInputFieldValueByID Function.
    const inputFieldAmount = getInputFieldValueByID('withdraw-field');

    // Take Previous Value From Withdraw section using getElementValueById Function.
    const previousWithdrawAmount = getElementValueById('withdraw-total');

    // Calculate Total Withdraw Amount.
    const totalWithdrawAmount = inputFieldAmount + previousWithdrawAmount;

    // Set Test Value Using setTextElementValueByID Function. 
    setTextElementValueById('withdraw-total', totalWithdrawAmount);


    // Take Previous Value From Balance Section Using getElementValueById Function.
    const previousBalanceAmount = getElementValueById('balance-total');

    // Calculate Total Balance After Withdrawing Amount.
    const totalBalanceAmount = previousBalanceAmount - inputFieldAmount;

    // Set Text Value using setTextElementValueById function.
    setTextElementValueById('balance-total', totalBalanceAmount);


})