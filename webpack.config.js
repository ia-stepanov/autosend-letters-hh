// Импортируем модуль path для работы с файловыми путями
const path = require('path');

module.exports = {
  // Режим сборки: 'production' для финальной версии, 'development' для отладки
  mode: 'production',

  // Входной файл, с которого начинается выполнение приложения
  entry: './src/main.js',

  // Настройки выходного файла
  output: {
    filename: 'script.js', // Имя итогового файла после сборки
    path: path.resolve(__dirname, 'dist'), // Папка, куда будет сохранён файл
  },

  module: {
    rules: [
      {
        // Правило для обработки JavaScript-файлов
        test: /\.js$/, // Применяется ко всем файлам с расширением .js
        exclude: /node_modules/, // Исключаем файлы из папки node_modules
        use: {
          loader: 'babel-loader', // Используем Babel для трансформации кода ES6+ в ES5
        },
      },
    ],
  },
};
