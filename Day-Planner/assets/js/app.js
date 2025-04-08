document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.time-blocks')) {
        console.error("Error: .time-blocks container missing.");
        return;
    }
    
    
    setupProductivityTips();

    const voiceBtn = document.querySelector('.voice-command');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', function() {
            alert('Voice control activated. Say "Add task" or "What\'s next?"');
        });
    }

    const quickAddBtn = document.querySelector('.quick-add-widget .btn-primary');
    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', function() {
            const taskInput = document.querySelector('.quick-add-widget input');
            if (taskInput && taskInput.value.trim()) {
                addTaskToList(taskInput.value.trim());
                taskInput.value = '';
            }
        });
    }
});


function setupProductivityTips() {
    const tipElement = document.getElementById('productivity-tip');
    const newTipBtn = document.getElementById('new-tip-btn');

    if (!tipElement || !newTipBtn) return;

    const tips = [
        "Take a 5-minute break every 25 minutes for better focus.",
        "Prioritize your most important task first thing in the morning.",
        "Group similar tasks together to minimize context switching.",
        "Use the Pomodoro technique to maintain focus and prevent burnout.",
        "Review your day each evening to plan for tomorrow."
    ];

    tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];
    newTipBtn.addEventListener('click', function() {
        tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];
    });
}
