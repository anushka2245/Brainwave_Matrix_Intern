document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const setTimeBtn = document.querySelector('.quick-actions .btn:nth-child(1)');
    const timeBlocks = document.querySelector('.time-blocks');
    const taskList = document.querySelector('.task-list');



    let selectedTime = '';

    // Set Time button
    setTimeBtn.addEventListener('click', () => {
        const time = prompt("Enter the time for the task (e.g., 09:30 AM):");
        if (time) {
            selectedTime = time;
            setTimeBtn.innerHTML = `<i class="fas fa-clock"></i> ${time}`;
        }
    });

    // Add Task button
    addTaskBtn.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (!taskName) {
            alert('Please enter a task name.');
            return;
        }

        if (!selectedTime) {
            alert('Please set the time for the task.');
            return;
        }

        // Create task element
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item d-flex justify-content-between align-items-center mb-2 p-2 border rounded bg-light';

        taskItem.innerHTML = `
            <div><strong>${selectedTime}</strong> - ${taskName}</div>
            <button class="btn btn-sm btn-danger delete-task"><i class="fas fa-trash-alt"></i></button>
        `;

        // Append to schedule
        timeBlocks.appendChild(taskItem);

        // Reset
        taskInput.value = '';
        selectedTime = '';
        setTimeBtn.innerHTML = `<i class="fas fa-clock"></i> Set Time`;
    });

    // Handle delete using event delegation
    timeBlocks.addEventListener('click', (e) => {
        if (e.target.closest('.delete-task')) {
            const taskToDelete = e.target.closest('.task-item');
            if (confirm("Are you sure you want to delete this task?")) {
                taskToDelete.remove();
            }
        }
    });
});

