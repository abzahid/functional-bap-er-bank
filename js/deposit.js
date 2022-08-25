document.getElementById('deposit-btn').addEventListener('click', function () {
    const previousDepositAmount = getElementValueById("total-deposite");
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const totalDeposit = previousDepositAmount + newDepositAmount;
    setElementValuebyId("total-deposite", totalDeposit);
    const previousTotalBalance = getElementValueById('current-total-balance');
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    setElementValuebyId('current-total-balance', newTotalBalance);



})