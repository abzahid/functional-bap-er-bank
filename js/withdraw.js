document.getElementById('withdraw-btn').addEventListener('click', function () {
    const previousWithdrawAmount = getElementValueById('total-withdraw');
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    setElementValuebyId('total-withdraw', totalWithdraw);
    const previousTotalBalance = getElementValueById('current-total-balance');
    const totalMainBalance = previousTotalBalance - newWithdrawAmount;
    setElementValuebyId('current-total-balance', totalMainBalance);

})