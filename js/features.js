//....Show cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    //....Showinf cashout form by button clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    //.....Hidden the add money form by button clicked
    document.getElementById('add-money-form').classList.add('hidden');
});


//....show add money form & hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){

    //....Showinf cashout form by button clicked
    document.getElementById('cash-out-form').classList.add('hidden');

    //.....Hidden the add money form by button clicked
    document.getElementById('add-money-form').classList.remove('hidden');
});