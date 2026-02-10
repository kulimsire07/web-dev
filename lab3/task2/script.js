// Select DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

/**
 * Add a new task to the list
 */
function addTask(event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  // Create elements
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  // Clear input
  todoInput.value = '';
  todoInput.focus();

  // Event: mark as done
  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  // Event: delete task
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(li);
  });
}

// Listen for form submit
todoForm.addEventListener('submit', addTask);
