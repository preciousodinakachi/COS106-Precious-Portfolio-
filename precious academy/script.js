
// Back to Top Button

const backToTop = document.getElementById("backToTop");

// Hide the button initially
backToTop.style.display = "none";

// Show button when scrolling down
window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});


backToTop.addEventListener("click", function ()

    window.scrollTo({
    top: 0,
    behavior: "smooth"

})
// ACADEMIC PLANNER

const plannerForm = document.getElementById("planner-form");
const taskList = document.getElementById("task-list");

let academicTasks = JSON.parse(
    localStorage.getItem("academicTasks")
) || [];

function saveTasks() {
    localStorage.setItem(
        "academicTasks",
        JSON.stringify(academicTasks)
    );
}

function displayTasks() {

    taskList.innerHTML = "";

    academicTasks.forEach(function (task, index) {

        const taskItem = document.createElement("li");

        taskItem.className = "task-item";

        if (task.completed) {
            taskItem.classList.add("completed");
        }

        taskItem.innerHTML = `
            <div class="task-title">${escapeHTML(task.name)}</div>

            <div class="task-details">
                Course: ${escapeHTML(task.course)}
            </div>

            <div class="task-details">
                Due Date: ${escapeHTML(task.date)}
            </div>

            <div class="task-actions">

                <button class="complete-btn"
                    onclick="toggleTask(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button class="delete-btn"
                    onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskItem);

    });

}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

plannerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskName = document.getElementById("task-name").value.trim();
    const courseName = document.getElementById("course-name").value.trim();
    const dueDate = document.getElementById("due-date").value;

    if (!taskName || !courseName || !dueDate) {
        alert("Please fill in all fields.");
        return;
    }

    academicTasks.push({
        name: taskName,
        course: courseName,
        date: dueDate,
        completed: false
    });

    saveTasks();

    displayTasks();

    plannerForm.reset();

});

function toggleTask(index) {

    academicTasks[index].completed =
        !academicTasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index) {

    academicTasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

// Display previously saved tasks when the page opens
displayTasks();

const form = document.getElementById("my form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const massageInput = document.getElementById("massage");
const massageError = document.getElementById("massageError")

form.addEventListener("submit", function (event)
        Event.preventDefault();

let valid = true;

nameError.textContent = "";
emailError.textContent = "";
massageError.textContent = "";

if (nameInput.ariaValueMax.trim() === "") {
    nameError.textContent = "Hello! What is your name?";
    valid = false;

    setTimeout() = "";
}, 3000);

const emailParttern = /@.*\.com/;
if (!emailParttern.test(emailInput.value)) {
    emailError.textContent = "Hi! Check your email!";

    setTimeout(() => {
        emailError.textContent = "";
    }, 3000);
})