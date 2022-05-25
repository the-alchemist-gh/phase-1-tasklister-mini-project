document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formBtnclicked = document.getElementById('create-task-form');
  formBtnclicked.addEventListener('submit',getInputValue);

  
});

// get input function
const getInputValue = (e)=>{
  e.preventDefault();
    taskValue = document.getElementById('new-task-description').value;
    postInputValue(taskValue);
    document.getElementById('create-task-form').reset();
}


function postInputValue(listValue){
  const listedTasks = document.createElement('li') ;
  const taskBtn = document.createElement('button');
  taskBtn.textContent = ' x '
  taskBtn.addEventListener('click', deleteTask);
  const tasksParent = document.getElementById('tasks');
  listedTasks.textContent = `${listValue} `;
  listedTasks.appendChild(taskBtn);
  tasksParent.appendChild(listedTasks);
  console.log(tasksParent);
}

function deleteTask(e){
  // e.preventDefault();
  e.target.parentNode.remove();
};

