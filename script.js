const RESUME_ID_ATTRIBUTE = '#resume_Вашь ID РЕЗЮМЕ'

const COVER_LETTER_TEMPLATE = (vacancyName) => `Добрый день! 

Меня заинтересовала предложенная Вами вакансия ${vacancyName}. Ознакомившись с перечнем требований к кандидатам, пришел к выводу, что мой опыт работы позволяют мне претендовать на данную должность. 

Обладаю высоким уровнем фронтенд-разработки, свободно говорю по-английски. В работе ответствен, пунктуален и коммуникабелен.

Буду с нетерпением ждать ответа и возможности обсудить условия работы и взаимные ожидания на собеседовании. Спасибо, что уделили время. 

Контактные данные прилагаю.`

// Добавить на панель доп. функционал
;(async function addNavLinks() {
  await delay(1000)

  const navLinks = document.querySelectorAll(
    '.supernova-navi-item.supernova-navi-item_lvl-2.supernova-navi-item_no-mobile'
  )

  const itemLetters = document.createElement('div')

  createElement(itemLetters, 'handler-letters', 'Отправить отклики')

  //Добавляем кнопку "Отправить отклики" в header
  navLinks[2].append(itemLetters)
  document.querySelector('[handler-letters]').addEventListener('click', init)

  function createElement(item, attribute, title) {
    item.classList.add(
      'supernova-navi-item',
      'supernova-navi-item_lvl-2',
      'supernova-navi-item_no-mobile'
    )

    item.innerHTML = `
    <a
      data-qa="mainmenu_vacancyResponses"
      class="supernova-link"
      ${attribute}
    >
      ${title}
    </a>
    <div class="supernova-navi-underline">${title}</div>
    `
  }
})()

async function init() {
  var vacancies = document.querySelectorAll(
    '[data-qa="vacancy-serp__vacancy_response"]'
  )
  var vacancy = document.querySelector('[data-qa="vacancy-response-link-top"]')

  // Вызвать функцию на странице с вакансией
  if (vacancy) {
    vacancy.click()

    await delay(1000)
    selectResume()

    await delay(500)
    handlerCoverLetter()
  }
  // Иначе вызвать функцию на странице со списком вакансий
  else {
    var i = 0
    while (i <= vacancies.length) {
      vacancies[i].click()

      await delay(1000)
      // Если есть сообщение об релокации, подтверждаем его
      hasRelocationTitleWarning() && confirmClickRelocation()

      await delay(1000)
      selectResume()

      await delay(500)
      handlerCoverLetter()
      i++

      await delay(1000)
    }
  }
}

// Функция для автоматического выбора резюме
function selectResume() {
  var resume = document.querySelector(RESUME_ID_ATTRIBUTE)
  var message = document.querySelector(
    '[data-qa="vacancy-response-letter-toggle"]'
  )

  if (!message) {
    resume.click()
  } else {
    resume.click()
    message.click()
  }
}

// Функция для автоматической отправки Сопроводительного письма
function handlerCoverLetter() {
  // Шаблон Сопроводительного письма
  var vacancyTitle = document.querySelector(
    '.bloko-modal-header_outlined > div'
  ).textContent
  var vacancyName = vacancyTitle.slice(1, vacancyTitle.length - 1)

  var messageArea = document.querySelector(
    '[data-qa="vacancy-response-popup-form-letter-input"]'
  )
  messageArea.value = ''
  messageArea.value = COVER_LETTER_TEMPLATE(vacancyName)

  // Добавить изменения в поле текста
  var evt = document.createEvent('HTMLEvents')
  evt.initEvent('change', true, true)
  messageArea.dispatchEvent(evt)

  // Отправить отклик
  var btnSubmit = document.querySelector(
    '[data-qa="vacancy-response-submit-popup"]'
  )
  btnSubmit.click()
}

function hasRelocationTitleWarning() {
  return !!document.querySelector('[data-qa="relocation-warning-title"]')
}

function confirmClickRelocation() {
  const btnSubmit = document.querySelector(
    '[data-qa="relocation-warning-confirm"]'
  )

  btnSubmit.click()
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
