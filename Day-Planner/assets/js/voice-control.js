document.addEventListener('DOMContentLoaded', function() {
    if ('webkitSpeechRecognition' in window) {
        const voiceBtn = document.querySelector('.voice-command');
        const recognition = new webkitSpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        
        voiceBtn.addEventListener('click', function() {
            recognition.start();
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            voiceBtn.classList.add('recording');
        });
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript.toLowerCase();
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.classList.remove('recording');
            
            // Process voice commands
            if (transcript.includes('add task')) {
                const taskText = transcript.replace('add task', '').trim();
                if (taskText) {
                    addTaskToList(taskText);
                }
            } else if (transcript.includes('what\'s next') || transcript.includes('what is next')) {
                alert('Your next task is: Team meeting with marketing at 10:00 AM');
            } else {
                alert(`Command not recognized: "${transcript}"`);
            }
        };
        
        recognition.onerror = function(event) {
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.classList.remove('recording');
            console.error('Speech recognition error', event.error);
        };
    } else {
        console.warn('Speech recognition not supported in this browser');
    }
});