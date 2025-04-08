document.addEventListener("DOMContentLoaded", () => {
    const tasks = getUpcomingTasks();
    const taskList = document.getElementById("upcomingTasksList");

    renderTasks(tasks, taskList);
    updateProductivity(tasks);
});

function getUpcomingTasks() {
    return [
        { id: 1, title: "Project Meeting", time: "9:00 AM", completed: false },
        { id: 2, title: "Code Review", time: "11:30 AM", completed: false },
        { id: 3, title: "Submit Report", time: "2:00 PM", completed: false },
        { id: 4, title: "Client Call", time: "4:00 PM", completed: false }
    ];
}

function renderTasks(tasks, taskList) {
    taskList.innerHTML = ""; // Clear previous list

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "d-flex justify-content-between align-items-center mb-2";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        checkbox.dataset.index = index;

        checkbox.addEventListener("change", function () {
            tasks[index].completed = this.checked;
            updateProductivity(tasks);
        });

        const taskInfo = document.createElement("span");
        taskInfo.innerHTML = `<strong>${task.title}</strong> <small class="text-muted">(${task.time})</small>`;

        const wrapper = document.createElement("div");
        wrapper.className = "d-flex align-items-center";
        wrapper.appendChild(checkbox);
        wrapper.appendChild(taskInfo);

        li.appendChild(wrapper);
        taskList.appendChild(li);
    });
}

function updateProductivity(tasks) {
    const completedTasks = tasks.filter(t => t.completed).length;
    const totalTasks = tasks.length;
    const productivity = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const productivityBar = document.querySelector(".progress-bar");
    const productivityLabel = document.getElementById("productivityLabel");

    if (productivityBar) {
        productivityBar.style.width = `${productivity}%`;
    }

    if (productivityLabel) {
        productivityLabel.textContent = `${productivity}% Today`;
    }
}
