// Функция программно изменяет значение текстового поля
export function setTextareaValue(textarea, text) {
  // Получаем сеттер свойства "value" у элемента <textarea>
  const valueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    'value'
  ).set;

  // Устанавливаем новое значение, используя оригинальный сеттер
  valueSetter.call(textarea, text);
}
