// Функция для поиска элемента с указанным текстом внутри заданного контейнера
export function findElementByText(container, selector = 'div', text = 'Помощь') {
  // Получаем все элементы внутри контейнера по указанному селектору
  return Array.from(container.querySelectorAll(selector)).find(
    // Ищем элемент, у которого текстовое содержимое совпадает с заданным текстом
    // и который не содержит дочерних элементов
    (el) => el.textContent.trim() === text && el.children.length === 0
  );
}
