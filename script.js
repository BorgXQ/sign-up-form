const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const phoneNum = document.getElementById('phoneNum');
const confPass = document.getElementById('confPass');
const errorFirstName = document.getElementById('errorFirstName');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    let messages = [];
    if (firstName.value === '' || firstName.value == null) {
        messages.push('First name is required');
    };
    
    if (messages.length > 0) {
        event.preventDefault();
        errorFirstName.innerText = messages.join(', ');
    };
});