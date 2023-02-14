document.getElementById('btn-withdraw').addEventListener('click', function () {
    /*
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
        // setTextElementValueById('balance-total', totalBalanceAmount);
        
    */



    //----------------------------------------------------------------//



    // Take Input Value From Withdraw Field Using getInputFieldValueByID Function.
    const inputFieldAmount = getInputFieldValueByID('withdraw-field');

    // Take Previous Value From Withdraw section using getElementValueById Function.
    const previousWithdrawAmount = getElementValueById('withdraw-total');

    // Take Previous Value From Balance Section Using getElementValueById Function.
    const previousBalanceAmount = getElementValueById('balance-total');

    // Calculate Total Withdraw Amount.
    const totalWithdrawAmount = inputFieldAmount + previousWithdrawAmount;

    // Calculate Total Balance After Withdrawing Amount.
    const totalBalanceAmount = previousBalanceAmount - inputFieldAmount;


    //Validation and Error Handling
    
    if (previousBalanceAmount < totalWithdrawAmount) {
        alert("Invalid Input Number");
    } else if (isNaN(inputFieldAmount)) {
        alert("Input Number is String.");
    } else {
        setTextElementValueById('balance-total', totalBalanceAmount);

        setTextElementValueById('withdraw-total', totalWithdrawAmount);
    }


})