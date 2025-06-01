// Универсальная функция для изменения "value" у input / select / textarea
export function triggerInputChange(node, value = '') {
  // Типы элементов, у которых есть свойство value
  const inputTypes = [
    window.HTMLInputElement,
    window.HTMLSelectElement,
    window.HTMLTextAreaElement,
  ];

  // Проверяем, принадлежит ли элемент к input / select / textarea
  if (inputTypes.includes(node?.__proto__?.constructor)) {
    // Получаем оригинальный сеттер свойства "value" из прототипа
    const valueSetter = Object.getOwnPropertyDescriptor(node.__proto__, 'value').set;

    // Устанавливаем новое значение, используя оригинальный сеттер
    valueSetter.call(node, value);

    // Создаём событие input с всплытием, чтобы сайт увидел изменение
    const event = new Event('input', { bubbles: true });

    // Инициируем событие на переданном элементе
    node.dispatchEvent(event);
  }
}
