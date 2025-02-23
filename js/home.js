
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // Get the new input amount.........
    const inputNewAmount = document.getElementById('input-add-money').value;

    // Get the Pin number.........
    const inputPinNumber = document.getElementById('input-pin-number').value;

    // verify the pin number to add money
    if (inputPinNumber === '444') {
        // get the current balance...
        const accountBalance = document.getElementById('account-balance').innerText;

        // Add new money with Current balace.....with convert to number by (parseFloat()).....
        const addMoneyNumber = parseFloat(inputNewAmount);
        const balanceNumber = parseFloat(accountBalance);

        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // update the new balance in UI.......
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Wrong Pin Number');
    }
})