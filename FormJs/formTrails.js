const nama = document.querySelector('#nama');
const submit = document.querySelector('#submit');
const outbox = document.querySelector('#out-box');
const mail = document.querySelector('#mail');
const messages = document.querySelector('#messages');

function submits(event) {
    event.preventDefault();
    let orang = nama.value.trim(); // Trim to remove spaces
    let email = mail.value.trim();
    let pesan = messages.value.trim();
    
    // Check if all fields are empty
    if (orang === "" && email === "" && pesan === "") {
        outbox.innerHTML = ''; // Set output to an empty string
    }
    // Check if any form field is filled but email does not have '@'
    else if (email !== "" && !email.includes('@')) {
        outbox.innerHTML = `<p>"Please enter a valid email address."</p>`;
    }
    // Check if all fields are filled correctly
    else if (orang !== "" && email !== "" && pesan !== "" && email.includes('@')) {
        outbox.innerHTML = `<p class="finish">"Thank you, ${orang}! We have received your message."</p>`;
        nama.value = '';
        mail.value = '';
        messages.value = '';
    }
}

submit.addEventListener('click', submits);
