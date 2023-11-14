const enlistButton = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const passwordInput = document.getElementById('volunteer_password');
const passwordInputConfirmed = document.getElementById('password_confirmation');
const body = document.querySelector('body');
const backgroundImage = document.querySelector('.background-image');
const resetButton = document.getElementById('reset-button');

passwordInput.addEventListener('input', function(){
    if(!checkPasswords(passwordInput.value, passwordInputConfirmed.value)){
        passwordInput.setCustomValidity('Passwords must match');
        passwordInput.classList.remove('valid-input');
        passwordInput.classList.add('invalid-input');
        passwordInputConfirmed.classList.remove('valid-input');
        passwordInputConfirmed.classList.add('invalid-input');
    }
    else{
        passwordInput.setCustomValidity('');
        passwordInputConfirmed.setCustomValidity('');
        passwordInput.classList.remove('invalid-input');
        passwordInput.classList.add('valid-input');
        passwordInputConfirmed.classList.remove('invalid-input');
        passwordInputConfirmed.classList.add('valid-input');
    }
})

passwordInputConfirmed.addEventListener('input', function(){
    if(!checkPasswords(passwordInput.value, passwordInputConfirmed.value)){
        passwordInputConfirmed.setCustomValidity('Passwords must match');
        passwordInputConfirmed.classList.remove('valid-input');
        passwordInputConfirmed.classList.add('invalid-input');
        passwordInput.classList.remove('valid-input');
        passwordInput.classList.add('invalid-input');
    }
    else{
        passwordInputConfirmed.setCustomValidity('');
        passwordInput.setCustomValidity('');
        passwordInputConfirmed.classList.remove('invalid-input');
        passwordInputConfirmed.classList.add('valid-input');
        passwordInput.classList.remove('invalid-input');
        passwordInput.classList.add('valid-input');
    }
})

inputs.forEach(input => {
    input.addEventListener('input', updateEnlistButtonColor);
})

inputs.forEach(input => {
    input.addEventListener('input', checkValidation);
})

inputs.forEach(input => {
    input.addEventListener('focus', highlightLabel);
})

inputs.forEach(input => {
    input.addEventListener('blur', unhighlightLabel);
})

select.addEventListener('input', function(){
    if(select.checkValidity()){
        select.classList.add('valid-input');
    }
})

select.addEventListener('focus', highlightLabel);
select.addEventListener('blur', unhighlightLabel);
select.addEventListener('input', updateEnlistButtonColor);

function updateEnlistButtonColor(){
    const allInputsValid = Array.from(inputs).every(input => input.checkValidity())
    if (allInputsValid === true && select.selectedIndex > 0){
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

function highlightLabel(e){
    const currentId = e.target.id
    console.log(currentId);
    const currentLabel = document.querySelector(`label[for=${currentId}]`);
    currentLabel.classList.add('selected-label');
}

function unhighlightLabel(e){
    const currentId = e.target.id
    console.log(currentId);
    const currentLabel = document.querySelector(`label[for=${currentId}]`);
    currentLabel.classList.remove('selected-label');
}

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
    enlistButton.classList.remove('validated-enlist-button');
    })