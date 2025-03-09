// Импортируем функцию, которая добавляет кнопку "Отправить отклики"
import { addResponseBtn } from './modules/interface/addResponseBtn';

// Основная точка входа в приложение
(async function main() {
  // Добавляем кнопку "Отправить отклики"
  await addResponseBtn();
})();
