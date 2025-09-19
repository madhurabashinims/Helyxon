document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('list');

  function createTaskItem(text) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    // toggle completed when clicking the task text
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn task-btn';
    deleteBtn.textContent = 'Delete';

    // stopPropagation so clicking delete won't toggle completed
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
    });

    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);

    return li;
  }

  function addTaskFromInput() {
    const text = taskInput.value.trim();
    if (!text) {
      taskInput.focus();
      return;
    }
    const item = createTaskItem(text);
    taskList.appendChild(item);
    taskInput.value = '';
    taskInput.focus();
  }

  // button click
  addTaskBtn.addEventListener('click', addTaskFromInput);

  // enter key
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTaskFromInput();
  });
});
