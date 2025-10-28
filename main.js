/* --- Скрипт для Бургер-меню (Вимога 3.2.1) --- */

// Знаходимо потрібні елементи в HTML
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

// Вішаємо слухача події "click" на кнопку бургера
burgerMenu.addEventListener('click', () => {

    // Перемикаємо (додаємо/видаляємо) клас 'active' на списку посилань (ul)
    // Цей клас буде показувати/ховати меню
    navLinks.classList.toggle('active');

    // Також перемикаємо клас 'active' на самій кнопці (button)
    // Це дозволить нам анімувати кнопку в "хрестик"
    burgerMenu.classList.toggle('active');

    // Оновлюємо атрибут aria-expanded для доступності (для скрін-рідерів)
    const isExpanded = navLinks.classList.contains('active');
    burgerMenu.setAttribute('aria-expanded', isExpanded);
});