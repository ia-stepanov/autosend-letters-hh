// Функция программно инициирует событие "change" для переданного элемента
export function dispatchChange(element) {
  // Проверяем, передан ли элемент
  if (!element) return;

  // Создаем событие "change" с поддержкой всплытия и отмены
  const evt = new Event('change', {
    bubbles: true, // событие всплывает
    cancelable: true, // событие можно отменить
  });

  // Инициируем событие на переданном элементе
  element.dispatchEvent(evt);
}
