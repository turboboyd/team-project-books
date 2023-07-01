const themeSliderEl = document.getElementById('slider');

themeSliderEl.addEventListener('change', toggleTheme);

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  // Перемикаємо тему зі світлої на темну або з темної на світлу
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Зберігаємо тему у local storage
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); // Зберігаємо тему у local storage
  }
}

// Отримуємо збережену тему з local storage (якщо така є)
const savedTheme = localStorage.getItem('theme');

// Перевіряємо, чи є збережена тема, і застосовуємо її, якщо така є
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'light') {
    themeSliderEl.checked = false;
  } else themeSliderEl.checked = true;
}
