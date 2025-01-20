const video = document.getElementById('0001-1555.mp4');
const totalFrames = 100; // Умовна кількість кадрів
let scrollPosition = 0;

// Отримання загальної тривалості відео
video.addEventListener('loadedmetadata', () => {
    const duration = video.duration;

    document.addEventListener('wheel', (event) => {
        scrollPosition += event.deltaY * 0.1; // Чутливість

        // Нормалізуємо в межах [0, totalFrames]
        if (scrollPosition > totalFrames) scrollPosition = 0;
        if (scrollPosition < 0) scrollPosition = totalFrames;

        // Визначаємо момент часу відео
        const currentTime = (scrollPosition / totalFrames) * duration;

        // Встановлюємо час у відео
        video.currentTime = currentTime;
    });
});
