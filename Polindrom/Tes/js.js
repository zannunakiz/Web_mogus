const checkBtn = document.querySelector('#check-btn');
const input = document.querySelector('#text-input');

function palindrome(){
    const values = input.value;
    const enchance = values.toLowerCase().replace(/[^a-z0-9]/g, '');
    const hasil = enchance.split('').reverse().join('');
    const result = document.querySelector('#result');

    if (enchance === hasil && enchance !== '') {
        result.innerHTML = `<strong>${values}</strong> is a palindrome.`;
    } else if (input.value === '') {
        result.textContent = "I got No time to code This!";
        alert("Please input a value");
    } else {
        result.innerHTML = `<strong>${values}</strong> is not a palindrome.`;
    }
    input.value = '';
}

checkBtn.addEventListener('click', palindrome);
