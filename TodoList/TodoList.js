let todoList = [];
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoListElement = document.getElementById("todo-list");

const addTodo = () => {
  const todoText = todoInput.value;
  if (todoText !== "") {
    const todo = {
      text: todoText,
    };
    todoList.push(todo);
    console.log(todoList);
    renderTodoList();
    todoInput.value = "";
  } else {
    alert("Please enter a todo");
  }
};

const renderTodoList = () => {
  todoListElement.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const todoElement = document.createElement("li");
    todoElement.classList.add("todo-item");
    todoElement.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
        `;
    todoListElement.appendChild(todoElement);
  }
};

const deleteTodo = (i) => {
  todoList.splice(i, 1);
  renderTodoList();
};

addTodoBtn.addEventListener("click", addTodo);
