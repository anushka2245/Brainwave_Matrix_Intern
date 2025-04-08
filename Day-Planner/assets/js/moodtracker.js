document.addEventListener("DOMContentLoaded", () => {
    const moodButtons = document.querySelectorAll(".mood-btn");
    const energySlider = document.querySelector(".energy-level input");

    let selectedMood = "";
    let energyLevel = energySlider.value;

    moodButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove 'active' from all buttons
            moodButtons.forEach(b => b.classList.remove("active"));
            // Add 'active' to the clicked one
            btn.classList.add("active");
            selectedMood = btn.dataset.mood;
            updateMoodSummary();
        });
    });

    energySlider.addEventListener("input", () => {
        energyLevel = energySlider.value;
        updateMoodSummary();
    });

    function updateMoodSummary() {
        console.log(`Mood: ${selectedMood}, Energy: ${energyLevel}`);
        // Optional: Reflect this in UI or send to backend
    }
});
