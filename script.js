const enlistButton = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const passwordInput = document.getElementById('volunteer_password');
const passwordInputConfirmed = document.getElementById('password_confirmation');
const body = document.querySelector('body');
const backgroundImage = document.querySelector('.background-image');
const resetButton = document.getElementById('reset-button');

inputs.forEach(input => {
    input.addEventListener('input', updateEnlistButtonColor);
})

inputs.forEach(input => {
    input.addEventListener('input', checkValidation);
})

select.addEventListener('input', function(){
    if(select.checkValidity()){
        select.classList.add('valid-input');
    }
})

function updateEnlistButtonColor(){
    const allInputsValid = Array.from(inputs).every(input => input.checkValidity())
    if (allInputsValid){
        enlistButton.classList.add('validated-enlist-button');
    } 
    else{
        enlistButton.classList.remove('validated-enlist-button');
    }
}

function checkValidation(){
    if(!this.checkValidity()){
        this.classList.remove('valid-input');
        this.classList.add('invalid-input');
    }
    else{
        this.classList.remove('invalid-input');
        this.classList.add('valid-input');
    }
}

passwordInput.addEventListener('input', function(){
    if(!checkPasswords(passwordInput.value, passwordInputConfirmed.value)){
        passwordInput.setCustomValidity('Passwords must match');
    }
    else{
        passwordInput.setCustomValidity('');
        passwordInputConfirmed.setCustomValidity('');
    }
})

passwordInputConfirmed.addEventListener('input', function(){
    if(!checkPasswords(passwordInput.value, passwordInputConfirmed.value)){
        passwordInputConfirmed.setCustomValidity('Passwords must match');
    }
    else{
        passwordInputConfirmed.setCustomValidity('');
        passwordInput.setCustomValidity('');
    }
})

function checkPasswords(firstPasswordInput, secondPasswordInput){
    return firstPasswordInput === secondPasswordInput;
}

body.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
  
    backgroundImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
  });

resetButton.addEventListener('click', function(){
    inputs.forEach(input => {
        input.classList.remove('valid-input');
        input.classList.remove('invalid-input');
    })
    select.classList.remove('valid-input');
    select.classList.remove('invalid-input');
    })