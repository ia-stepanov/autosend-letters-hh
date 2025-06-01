// Функция для предотвращающая перехода на другие страницы
export function navigationGuard() {
  // Получаем текущий адрес страницы
  const prevLoc = window.location.href;

  // Добавляем слушатель на событие перехода
  navigation.addEventListener('navigate', (e) => {
    // Отменяем переход по адресу и прекращаем распространение события
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    // Устанавливаем флаг перед перезагрузкой страницы
    sessionStorage.setItem('resumeAfterReload', 'true');

    // Возвращаем пользователя на исходную страницу
    window.location.href = prevLoc;
  });

  // Замораживаем объект location, чтобы его нельзя было изменить вручную
  Object.freeze(document.location);
}
