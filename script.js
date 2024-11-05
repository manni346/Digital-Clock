function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Update the clock every second
setInterval(updateClock, 1000);

// Set up the dark mode toggle
document.getElementById("toggle-dark-mode").addEventListener("click", toggleDarkMode);

// Initialize clock on page load
updateClock();
