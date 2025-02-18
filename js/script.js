//............Login button.......
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault(); // <..... to stop reload .....>

    //  <------Get phone number------>
    const phoneNUmber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNUmber === '555' && pinNumber === '444'){
        console.log('login');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Phone Number or Pin');
    }
})