document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const targetBtn = event.target;
        if (targetBtn.classList.contains('complete-btn')) {
            const taskItem = targetBtn.parentElement;
            taskItem.style.textDecoration = 'line-through';
            taskItem.style.opacity = '0.5';
        } else if (targetBtn.classList.contains('delete-btn')) {
            const taskItem = targetBtn.parentElement;
            taskItem.remove();
        }
    });
});
