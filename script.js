// Select elements
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todosContainer = document.querySelector('.todos');
const completeButton = document.querySelector('.filter[data-filter="completed"]');
const incompleteButton = document.querySelector('.filter[data-filter="pending"]');
const deleteAllButton = document.querySelector('.delete-all');

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim(); // Get input value and trim whitespace

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  // Add task text
  listItem.textContent = taskText;

  // Add a complete checkbox to the task
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'task-checkbox';
  checkBox.addEventListener('change', toggleComplete);

  // Add a delete button to the task
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.addEventListener('click', () => listItem.remove()); // Remove task on click

  // Append checkbox and delete button to the list item
  listItem.prepend(checkBox);
  listItem.appendChild(deleteButton);

  // Append the list item to the todos container
  todosContainer.appendChild(listItem);

  // Clear the input field
  todoInput.value = '';
}

// Toggle task completion (Complete/Incomplete)
function toggleComplete(event) {
  const listItem = event.target.parentElement;

  if (event.target.checked) {
    listItem.style.textDecoration = 'line-through';
    listItem.style.opacity = 0.6;
  } else {
    listItem.style.textDecoration = 'none';
    listItem.style.opacity = 1;
  }
}
const toggle = document.getElementById('theme-toggle');
const backgroundVideo = document.getElementById('background-video');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode');

  // Change the background video source based on the mode
  if (document.body.classList.contains('dark-mode')) {
    backgroundVideo.src = 'night-video.mp4'; // Night mode video
  } else {
    backgroundVideo.src = 'day-video.mp4'; // Day mode video
  }
});



// Filter completed tasks
function showCompletedTasks() {
  const tasks = document.querySelectorAll('.todo-item');
  tasks.forEach(task => {
    if (task.querySelector('.task-checkbox').checked) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

// Filter incomplete tasks
function showPendingTasks() {
  const tasks = document.querySelectorAll('.todo-item');
  tasks.forEach(task => {
    if (!task.querySelector('.task-checkbox').checked) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

// Delete all tasks
function deleteAllTasks() {
  const tasks = document.querySelectorAll('.todo-item');
  tasks.forEach(task => task.remove());
}

// Event listeners
addButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
completeButton.addEventListener('click', showCompletedTasks);
incompleteButton.addEventListener('click', showPendingTasks);
deleteAllButton.addEventListener('click', deleteAllTasks);
const addTaskSound = new Audio('sound.mp3');
const completeTaskSound = new Audio('complete-sound.mp3');

document.querySelector('.add-button').addEventListener('click', () => {
  addTaskSound.play();
});

document.querySelector('.todos-container').addEventListener('click', (e) => {
  if (e.target.classList.contains('complete-task')) {
    completeTaskSound.play();
  }
});
