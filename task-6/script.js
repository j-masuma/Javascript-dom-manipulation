const todos = JSON.parse(localStorage.getItem('todos')) || [];
const tosoList=document.getElementById('todoList');

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('change', () => toggleCompleted(index));
      const label = document.createElement('label');
      label.innerText = todo.text;
      label.classList.toggle('completed', todo.completed);
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      removeButton.addEventListener('click', () => removeTodo(index));
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(removeButton);
      todoList.appendChild(li);
    });
  }

  function addTodo(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todoInput');
    const text = todoInput.value;
    if (text) {
      todos.push({ text, completed: false });
      todoInput.value = '';
      saveToLocalStorage();
      renderTodos();
    }
  }

  function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    saveToLocalStorage();
    renderTodos();
  }

  function removeTodo(index) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  }

  function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const todoForm = document.getElementById('todoForm');
  todoForm.addEventListener('submit', addTodo);

  renderTodos();
