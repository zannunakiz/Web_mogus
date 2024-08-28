const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;



const check = () => {
    
    if(regex.test(input.value) === true){
        result.innerText = `Valid US Phone Number : ${input.value}`
    }
    else if(!input.value){
        alert('Please Enter A Phone Number...');
    }
    else if(regex.test(input.value) === false) {
        result.innerText = `Invalid US Phone Number : ${input.value}`
    }
}

const clear = () => {
    input.value = '';
}




checkBtn.addEventListener('click', check)
clearBtn.addEventListener('click', clear)