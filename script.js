// Get elements
const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadlineInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList');
const emptyState = document.getElementById('emptyState');

// Tasks array
let tasks = [];

// Load tasks when page loads
window.addEventListener('load', function() {
    loadTasks();
    displayTasks();
});

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add new task
function addTask() {
    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;

    // Check if task is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        deadline: deadline,
        completed: false
    };

    // Add to array
    tasks.push(task);

    // Save and display
    saveTasks();
    displayTasks();

    // Clear inputs
    taskInput.value = '';
    deadlineInput.value = '';
}

// Function to display all tasks
function displayTasks() {
    // Clear list
    tasksList.innerHTML = '';

    // Show/hide empty state
    if (tasks.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    // Display each task
    tasks.forEach(task => {
        // Create task item
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        // Check if overdue
        if (task.deadline && !task.completed) {
            const today = new Date();
            const deadlineDate = new Date(task.deadline);
            if (deadlineDate < today) {
                taskItem.classList.add('overdue');
            }
        }

        // Add completed class
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
            saveTasks();
            displayTasks();
        });

        // Task content
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';

        const taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        taskContent.appendChild(taskText);

        // Add deadline if exists
        if (task.deadline) {
            const taskDeadline = document.createElement('div');
            taskDeadline.className = 'task-deadline';
            taskDeadline.innerHTML = '<i class="far fa-calendar-alt"></i> Due: ' + task.deadline;
            taskContent.appendChild(taskDeadline);
        }

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn btn-delete';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', function() {
            deleteTask(task.id);
        });

        // Append elements
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);

        tasksList.appendChild(taskItem);
    });
}

// Function to delete task
function deleteTask(taskId) {
    // Confirm before deleting
    if (confirm('Delete this task?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        displayTasks();
    }
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

console.log('TaskMaster loaded!');