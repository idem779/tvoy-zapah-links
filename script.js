// Переключение темы (темная/светлая)
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀ Светлая тема';
    } else {
        themeToggle.textContent = '🌙 Темная тема';
    }
});

// Добавляем плавное появление кнопок
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.button-container').style.opacity = "1";
    document.querySelector('.button-container').style.transform = "translateY(0)";
});
