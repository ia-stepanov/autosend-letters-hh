# AutoSend Letters HeadHunter

## Описание проекта

**AutoSend Letters HeadHunter** — это удобный скрипт, который автоматизирует отправку откликов на вакансии на HeadHunter. Цель проекта — сделать поиск работы быстрым и результативным. Если у вас есть желание поддержать развитие проекта и помочь в добавлении новых функций, можно сделать это по ссылке в конце описания.

> **Важно**: сейчас скрипт работает при наличии **двух или более резюме**. Если у вас одно резюме, попап «Отклик на вакансию» не появится, и скрипт не сможет автоматически отправлять отклики подряд.

## Зачем нужен этот скрипт?

Поиск работы часто отнимает много сил: приходится просматривать десятки или сотни вакансий, следить за обновлениями в интересующих компаниях и тратить время на составление сопроводительных писем. В результате удаётся отправить несколько откликов в день. Это неэффективно и отнимает много времени.

**AutoSend Letters HeadHunter** помогает автоматизировать процесс отправки откликов, освобождая время для более важных дел: подготовки к собеседованиям, улучшению резюме и развитию необходимых навыков.

## Что уже сделано (версия 2.0)

- **Удобная автоматизация откликов**:

  - Скрипт открывает попап «Отклик на вакансию» со страницы вакансии или из списка вакансий;
  - Автоматически выбирает нужное резюме для отклика;
  - Подставляет название вакансии в сопроводительное письмо;
  - Нажимает кнопку «Откликнуться» и переходит к следующей вакансии.

- **Улучшенная архитектура**:
  - Код разделён на модули для удобной поддержки и масштабирования;
  - Обновлены селекторы, настройки и константы вынесены в отдельные файлы;
  - Добавлен сборщик webpack, упрощающий внесение изменений и сборку модулей в один файл;
  - Написаны комментарии (в стиле мини-документации), что облегчает быстрый вход в проект другим разработчикам.

### Структура проекта

```
src/
  ├─ config/ — настройки и константы
  │   ├─ constants.js — выбираем резюме, название шаблона и время задержки
  │   ├─ jobUrls.js — ссылки для нужных сайтов
  │   └─ selectors.js — селекторы для интерфейса HeadHunter
  ├─ data/ — шаблоны сопроводительных писем
  │   └─ data.js
  ├─ globals/ — глобальные переменные и флаги состояния
  │   └─ globals.js
  ├─ main.js — основной файл, который запускает проект
  ├─ modules/
  │   ├─ interface/ — модули для взаимодействия с элементами интерфейса
  │   │   ├─ addResponseBtn.js
  │   │   ├─ findElementByText.js
  │   │   └─ toggleResponseBtn.js
  │   ├─ popup/ — модули для работы с попапом для отправки откликов
  │   │   ├─ getVacancyName.js
  │   │   ├─ insertCoverLetter.js
  │   │   ├─ selectResume.js
  │   │   └─ submitCoverLetter.js
  │   ├─ process/ модуль для определения контекста страницы
  │   │   └─ processVacancies.js
  │   └─ submit/ модули для отправки откликов на одну или нескольких вакансий
  │       ├─ submitMultipleVacancies.js
  │       └─ submitSingleVacancy.js
  ├─ utils/ — вспомогательные функции
  │   ├─ delay.js — реализует задержку в выполнении кода
  │   └─ dispatchChange.js — инициирует изменение в элементе
  └─ webpack.config.js — конфигурационный файл для сборки проекта

```

## В планах реализовать

- [ ] **Удобный и интуитивно понятный интерфейс** — возможность выбирать резюме, время задержки и сопроводительные письма напрямую, без редактирования кода;
- [ ] **Автоматическое обновление резюме** — автоматическое поднятие резюме, повышая его приоритет в поисковой выдаче;
- [ ] **Создание сопроводительных писем с помощью AI** — автоматическое формирование персонализированных откликов, которые увеличивают шанс получить приглашение на собеседование.

## Как установить и запустить скрипт

### Для разработчиков

1. **Скопируйте репозиторий**:
   ```
   git clone https://github.com/ia-stepanov/autosend-letters-hh.git
   ```
2. **Установите модули**:
   ```
   npm install
   ```
3. **Соберите код**:
   ```
   npm run build
   ```

### Для пользователей

4. **Установите расширение для Chrome** — [Scripty](https://chrome.google.com/webstore/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam).
5. **Автоматическая установка скрипта**: [Установить скрипт](https://scripty.abhisheksatre.com/#/share/script_m80jffs5lguo41).
6. **Ручная установка** — см. видео (в процессе):
   - Измените шаблон сопроводительного письма (при желании).
   - Добавьте ID резюме в скрипт.

Теперь вы можете использовать несколько шаблонов сопроводительных писем, управлять задержкой и выбирать, с какого резюме отправлять отклики.

## Языки

- **JavaScript**

## Скриншот

<details><summary><b>Развернуть</b></summary>

[![AutoSend Letters HeadHunter](https://user-images.githubusercontent.com/86494748/184140911-b7603645-7bc5-4fad-8d06-80a56cbdedf7.png)](https://hh.ru/search/vacancy?text=Frontend+developer)

</details>

## Ссылка на проект

🔗 **GitHub**: [https://github.com/ia-stepanov/autosend-letters-hh](https://github.com/ia-stepanov/autosend-letters-hh)

---

[![Поддержать проект](https://img.shields.io/badge/Поддержать_проект-Boosty-blue)](https://boosty.to/ia-stepanov/single-payment/donation/364228)
