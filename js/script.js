//selectors
const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');

//Event listeners
addTask.addEventListener('click', addTodo);
taskList.addEventListener('click', deleteCheck);


//functions

function addTodo(e){
    // prevent form from submitting
    event.preventDefault();
    // todo div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('todo');
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = taskInput.value;
    newTodo.classList.add('todo-item');
    taskDiv.appendChild(newTodo);
    // completed button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    taskDiv.appendChild(completedButton);
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete-btn');
    taskDiv.appendChild(deleteButton);

    // append to task-list
    taskList.appendChild(taskDiv);

    // clear input field
    taskInput.value = '';

}

function deleteCheck(e){
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    // completed todo
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

