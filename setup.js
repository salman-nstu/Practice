const boardNameInput = document.getElementById("boardName");

const addStateBtn = document.getElementById("addStateBtn");

const statesContainer =
    document.getElementById("statesContainer");

const addTaskBtn =
    document.getElementById("addTaskBtn");

const tasksContainer =
    document.getElementById("tasksContainer");

const createBoardBtn =
    document.getElementById("createBoardBtn");


let states = [];

let tasks = [];

function generateStateId() {

    return Date.now().toString() +
        Math.random().toString(36).substring(2, 8);

}

function generateTaskId() {

    return Date.now().toString() +
        Math.random().toString(36).substring(2, 8);

}

function addState() {

    const state = {

        id: generateStateId(),

        name: ""

    };

    states.push(state);

    renderStates();

}

function removeState(stateId) {

    states = states.filter(
        state => state.id !== stateId
    );

    renderStates();

}

function renderStates() {

    statesContainer.innerHTML = "";


    if (states.length === 0) {

        statesContainer.innerHTML = `
            <div class="empty-message">
                No workflow states added yet.
            </div>
        `;

        return;
    }

    states.forEach((state, index) => {

        const stateElement =
            document.createElement("div");

        stateElement.className = "state-item";


        stateElement.innerHTML = `

            <input
                type="text"
                placeholder="State ${index + 1}"
                value="${state.name}"
                data-state-id="${state.id}"
            >

            <button
                type="button"
                class="remove-button"
                data-state-id="${state.id}"
                title="Remove state"
            >
                ×
            </button>

        `;

        const input =
            stateElement.querySelector("input");

        input.addEventListener("input", function () {

            state.name = this.value;

        });

        const removeButton =
            stateElement.querySelector(".remove-button");

        removeButton.addEventListener(
            "click",
            function () {

                removeState(state.id);

            }
        );


        statesContainer.appendChild(stateElement);

    });

}

function addTask() {

    const task = {

        id: generateTaskId(),

        title: "",

        description: "",

        stateId: ""

    };

    tasks.push(task);

    renderTasks();

}

function removeTask(taskId) {

    tasks = tasks.filter(
        task => task.id !== taskId
    );

    renderTasks();

}

function renderTasks() {

    tasksContainer.innerHTML = "";


    if (tasks.length === 0) {

        tasksContainer.innerHTML = `
            <div class="empty-message">
                No tasks added yet.
            </div>
        `;

        return;
    }

    tasks.forEach((task, index) => {

        const taskElement =
            document.createElement("div");

        taskElement.className = "task-item";


        taskElement.innerHTML = `

            <div class="task-form">

                <div class="task-form-group">

                    <label>
                        Task Name
                    </label>

                    <input
                        type="text"
                        class="task-title"
                        placeholder="Enter task name"
                        value="${task.title}"
                    >

                </div>


                <div class="task-form-group">

                    <label>
                        Initial State
                    </label>

                    <select class="task-state">

                        <option value="">
                            Select state
                        </option>

                        ${getStateOptions(task.stateId)}

                    </select>

                </div>


                <div class="task-form-group full-width">

                    <label>
                        Description
                    </label>

                    <textarea
                        class="task-description"
                        placeholder="Enter task description"
                    >${task.description}</textarea>

                </div>


                <div>

                    <button
                        type="button"
                        class="remove-button"
                        title="Remove task"
                    >
                        ×
                    </button>

                </div>

            </div>

        `;

        const titleInput =
            taskElement.querySelector(".task-title");

        titleInput.addEventListener("input", function () {

            task.title = this.value;

        });

        const descriptionInput =
            taskElement.querySelector(".task-description");

        descriptionInput.addEventListener(
            "input",
            function () {

                task.description = this.value;

            }
        );

        const stateSelect =
            taskElement.querySelector(".task-state");

        stateSelect.addEventListener(
            "change",
            function () {

                task.stateId = this.value;

            }
        );


        const removeButton =
            taskElement.querySelector(".remove-button");

        removeButton.addEventListener(
            "click",
            function () {

                removeTask(task.id);

            }
        );


        tasksContainer.appendChild(taskElement);

    });

}

function getStateOptions(selectedStateId) {

    return states
        .map(state => {

            const selected =
                state.id === selectedStateId
                    ? "selected"
                    : "";

            return `
                <option
                    value="${state.id}"
                    ${selected}
                >
                    ${state.name || "Unnamed State"}
                </option>
            `;

        })
        .join("");

}


addStateBtn.addEventListener(
    "click",
    addState
);


addTaskBtn.addEventListener(
    "click",
    addTask
);


renderStates();

renderTasks();