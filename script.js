function addTask() {
    var inputField = document.getElementById("taskInput");
    var taskText = inputField.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.innerHTML = '<span onclick="toggleTask(this)" class="task">' + taskText + '</span> <button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(taskItem);
        inputField.value = "";
    }
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

function deleteTask(btn) {
    btn.parentNode.remove();
}
