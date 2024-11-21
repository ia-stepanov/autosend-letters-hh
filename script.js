// ВАШ РЕЗЮМЕ ID (БЕЗ ЭТОГО КОД НЕ БУДЕТ РАБОТАТЬ!!!)
const RESUME_ID_ATTRIBUTE = '#ВАШ РЕЗЮМЕ ID' // Пример: #resume_0c74c60fff0b6bd3c90039ed1f6f7669436378

const COVER_LETTER_TEMPLATE = (vacancyName) => `
Добрый день! 

Меня заинтересовала предложенная Вами вакансия ${vacancyName}. Ознакомившись с перечнем требований к кандидатам, пришел к выводу, что мой опыт работы позволяет мне претендовать на данную должность. 

Обладаю высоким уровнем фронтенд-разработки, свободно говорю по-английски. В работе ответствен, пунктуален и коммуникабелен.

Буду с нетерпением ждать ответа и возможности обсудить условия работы и взаимные ожидания на собеседовании. Спасибо, что уделили время. 

Контактные данные прилагаю.
`

const DELAY_SHORT = 500
const DELAY_LONG = 1000
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let isRunning = false // Переменная для отслеживания состояния выполнения

const createElement = (item, attribute, title) => {
  item.classList.add(
    'supernova-navi-item',
    'supernova-navi-item_lvl-2',
    'supernova-navi-item_no-mobile'
  )

  item.innerHTML = `
    <a data-qa="mainmenu_vacancyResponses" class="supernova-link" ${attribute}>
      ${title}
    </a>
    <div class="supernova-navi-underline">${title}</div>
  `
}

const addNavLinks = async () => {
  await delay(DELAY_LONG)

  const navLinks = document.querySelectorAll(
    '.supernova-navi-item.supernova-navi-item_lvl-2'
  )

  const itemLetters = document.createElement('div')
  createElement(itemLetters, 'handler-letters', 'Отправить отклики')
  navLinks[2].append(itemLetters)

  document
    .querySelector('[handler-letters]')
    .addEventListener('click', toggleInit)
}

const toggleInit = async () => {
  const button = findElementByText('a', 'Отправить отклики')

  if (isRunning) {
    // Остановка выполнения
    isRunning = false
    button.textContent = 'Отправить отклики'
    console.log('⏹️ Остановлено пользователем')
  } else {
    // Запуск выполнения
    isRunning = true
    button.textContent = 'Стоп'
    console.log('▶️ Запуск откликов')
    await init()
    button.textContent = 'Отправить отклики'
    isRunning = false
  }
}

const selectResume = () => {
  const resume = document.querySelector(RESUME_ID_ATTRIBUTE)
  const messageToggle = document.querySelector(
    '[data-qa="vacancy-response-letter-toggle"]'
  )

  resume?.click()
  messageToggle?.click()
}

const handlerCoverLetter = () => {
  const vacancyTitleElement = document.querySelector(
    '.bloko-modal-header_outlined > div'
  )

  const vacancyName = vacancyTitleElement?.textContent.trim() || 'вакансия'
  const messageArea = document.querySelector(
    '[data-qa="vacancy-response-popup-form-letter-input"]'
  )

  if (messageArea) {
    messageArea.value = COVER_LETTER_TEMPLATE(vacancyName)
    messageArea.dispatchEvent(new Event('change'))
  }

  const submitButton = document.querySelector(
    '[data-qa="vacancy-response-submit-popup"]'
  )
  submitButton?.click()
}

const handleRelocationWarning = () => {
  const relocationButton = document.querySelector(
    '[data-qa="relocation-warning-confirm"]'
  )
  relocationButton?.click()
}

const init = async () => {
  const vacancies = findElementsByTextContains(
    'magritte-button__label',
    'Откликнуться'
  )

  for (let i = 0; i < vacancies.length; i++) {
    if (!isRunning) break

    console.log(`🚀 Обработка вакансии: ${i + 1}`)
    vacancies[i].click()
    vacancies.shift() // Удаляем обработанную вакансию
    await delay(DELAY_LONG)

    if (document.querySelector('[data-qa="relocation-warning-title"]')) {
      handleRelocationWarning()
      await delay(DELAY_SHORT)
    }

    if (document.querySelector(RESUME_ID_ATTRIBUTE)) {
      selectResume()
      await delay(DELAY_SHORT)
      handlerCoverLetter()
      await delay(DELAY_LONG)
    } else {
      console.log('⚠️ Резюме не найдено, пропуск текущей вакансии')
    }

    await delay(DELAY_SHORT)
  }
}

function findElementsByTextContains(className, text) {
  return Array.from(document.querySelectorAll('span')).filter(
    (element) =>
      element.classList.toString().includes(className) &&
      element.textContent.includes(text)
  )
}

function findElementByText(tagName, text) {
  return Array.from(document.querySelectorAll(tagName)).find(
    (element) => element.textContent.trim() === text
  )
}

// Инициализация
addNavLinks()
