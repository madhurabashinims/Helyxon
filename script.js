// Get references to the DOM elements
const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("list");

// Add a click event listener to the button
addTaskBtn.addEventListener('click', () => {
    // Get the value of the input box
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item element
        const listItem = document.createElement('li');

        // Create a span to hold the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Toggle completed class when clicking task text
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn', 'task-btn');

        // Remove task on delete button click
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        // Append span + button inside li
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        // Add the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input box
        taskInput.value = '';
    }
});
