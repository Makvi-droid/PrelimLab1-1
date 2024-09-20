let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submitBtn');
let errorUser = document.getElementById('usernameError');
let errorPassword = document.getElementById('passwordError');
let error = document.querySelector('.error');

form.addEventListener('submit', function(e){

    let errorMsgs = [];

    errorUser.textContent = '';
    errorPassword.textContent = '';

    if(username.value === '' || username.value == null){
        errorUser.textContent = 'Username is required';
        errorMsgs.push('Username is required');
    }

    if(password.value === '' || password.value == null){
        errorPassword.textContent = 'Password is required';  
        errorMsgs.push('Password is required');
    }

    if(username.value === true && password.value === '' || password.value == null){
        errorPassword.textContent = 'Password is required';
        errorMsgs.push('Password is required');
    }

    if(password.value === true && username.value === '' || username.value == null){
        errorPassword.textContent = 'Username is required';
        errorMsgs.push('Username is required');
    }

    if (errorMsgs.length > 0) {
        e.preventDefault(); 
    }
        

});