// Функция реализует задержку в выполнении кода на заданное количество миллисекунд
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
