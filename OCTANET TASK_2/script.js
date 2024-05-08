const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button class="complete-btn" onclick="completeTask(this)">Complete</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.querySelector('span').classList.toggle('complete');
}

function deleteTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.classList.add('remove');
  setTimeout(() => {
    taskItem.remove();
  }, 500); // Match the animation duration
}
