const inputTask = document.querySelector('#inputTask');
const addButton = document.querySelector('#addButton');
const box = document.querySelector('#box');


function addTask(){
    task = inputTask.value;
    if(task !== ''){
        const newTask = document.createElement('div');
        newTask.innerHTML=`
        <p>${task}</p>
        <button class="remove" id="remove">Remove</button>
        `;

        box.appendChild(newTask);
        inputTask.value='';
    }


}



function removeTask(mogus){
    if(mogus.target.classList.contains('remove')){
    mogus.target.parentElement.remove()
}

}


addButton.addEventListener('click', addTask)
box.addEventListener('click', removeTask);


