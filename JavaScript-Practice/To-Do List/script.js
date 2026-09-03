const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const taskList = document.querySelector("#taskList");

let tasks = [];

function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }

    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.dataset.id = task.id;

        li.appendChild(span);
        li.appendChild(removeButton);

        taskList.appendChild(li);
    });
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: text
    };
    const exists = tasks.some(
        task => task.text.toLowerCase() === text.toLowerCase()
    );

    if (exists) {

        return;
    }

    tasks.push(task);

    saveTasks();
    renderTasks();

    input.value = "";
});

taskList.addEventListener("click", function (event) {

    if (!event.target.matches("button")) {
        return;
    }

    const id = Number(event.target.dataset.id);

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
});

loadTasks();