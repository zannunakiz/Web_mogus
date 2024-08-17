document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messages = document.getElementById('messages').value;

    if (name && email && messages) {
        document.getElementById('out-box').innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Messages:</strong> ${messages}</p>
        `;
    }
});
