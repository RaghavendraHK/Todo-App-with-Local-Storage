
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";

        li.innerHTML = `
      <span onclick="toggleTodo(${index})">${todo.text}</span>
      <button class="delete-btn" onclick="deleteTodo(${index})">X</button>
    `;

        list.appendChild(li);
    });
}

function addTodo() {
    if (input.value.trim() === "") return;

    todos.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTodos();
    renderTodos();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

renderTodos();
