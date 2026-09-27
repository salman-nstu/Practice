const boardName = document.getElementById("boardName");
const addStateBtn = document.getElementById("addStateBtn");
const statesContainer = document.getElementById("statesContainer");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");
const createBoardBtn = document.getElementById("createBoardBtn");


let states = [];
let tasks = [];

let stateId = 1;
let taskId = 1;

function addState() {
    const state = {
        id: stateId++,
        name: ""
    };
    states.push(state);
    renderStates();
    renderTasks();
    console.log("State Created..");
}


function removeState(id) {
    states = states.filter(state => state.id !== id);
    renderStates();
    renderTasks();
    console.log("State Removed...");

}


function renderStates() {
    statesContainer.innerHTML = "";
    if (states.length === 0) {
        statesContainer.innerHTML =
            "<div class='empty-message'>No states added.</div>";
        return;
    }
    states.forEach((state, index) => {

        const div = document.createElement("div");

        div.className = "state-item";

        div.innerHTML = `
            <input
                type="text"
                placeholder="State ${index + 1}"
                value="${state.name}"
            >
            <button
                type="button"
                class="remove-button"
            >
                ×
            </button>
        `;


        const input = div.querySelector("input");
        input.addEventListener("input", function () {
            state.name = input.value;
        });
        const removeButton =
            div.querySelector(".remove-button");
        removeButton.addEventListener("click", function () {
            removeState(state.id);
        });
        statesContainer.appendChild(div);
    });
}

function addTask() {
    const task = {
        id: taskId++,
        title: "",
        description: "",
        stateId: null
    };
    tasks.push(task);
    renderTasks();

    console.log("Task Added... ");
}
stateId = stateId + 2;
addState;

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}



createBoardBtn.addEventListener("click", function () {
    console.log("Board Name:", boardName.value);
    console.log("States:", states);
    console.log("Tasks:", tasks);
});

addStateBtn.addEventListener("click", addState);
addTaskBtn.addEventListener("click", addTask);
// function renderStates() { };
function renderTasks() { };
