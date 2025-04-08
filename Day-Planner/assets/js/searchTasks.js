document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("taskSearch");
    const tasks = document.querySelectorAll("#todayScheduleTasks .task-item");

    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        let matchCount = 0;

        tasks.forEach(task => {
            const title = task.querySelector(".task-title").textContent.toLowerCase();
            if (title.includes(keyword)) {
                task.style.display = "block";
                matchCount++;
            } else {
                task.style.display = "none";
            }
        });

        if (matchCount === 0 && keyword.trim() !== "") {
            alert("Task not found!");
        }
    });
});
