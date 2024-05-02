//↓↓↓ ВАШЕ РЕЗЮМЕ ID (БЕЗ ЭТОГО КОД НЕ БУДЕТ РАБОТАТЬ!!!) ↓↓↓

const RESUME_ID_ATTRIBUTE = '#ВАШЬ РЕЗЮМЕ ID' // Пример: #resume_0c74c60fff0b6bd3c90039ed1f6f7669436378

//↑↑↑ ВАШЕ РЕЗЮМЕ ID (БЕЗ ЭТОГО КОД НЕ БУДЕТ РАБОТАТЬ!!!) ↑↑↑

const COVER_LETTER_TEMPLATE = (vacancyName) => `Добрый день! 

Меня заинтересовала предложенная Вами вакансия ${vacancyName}. Ознакомившись с перечнем требований к кандидатам, пришел к выводу, что мой опыт работы позволяют мне претендовать на данную должность. 

Обладаю высоким уровнем фронтенд-разработки, свободно говорю по-английски. В работе ответствен, пунктуален и коммуникабелен.

Буду с нетерпением ждать ответа и возможности обсудить условия работы и взаимные ожидания на собеседовании. Спасибо, что уделили время. 

Контактные данные прилагаю.`

const DELAY_500 = 500
const DELAY_1000 = 1000
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const createElement = (item, attribute, title) => {
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

const addNavLinks = async () => {
  await delay(DELAY_1000)

  const navLinks = document.querySelectorAll(
    '.supernova-navi-item.supernova-navi-item_lvl-2.supernova-navi-item_no-mobile'
  )

  const itemLetters = document.createElement('div')

  createElement(itemLetters, 'handler-letters', 'Отправить отклики')

  navLinks[2].append(itemLetters)
  document.querySelector('[handler-letters]').addEventListener('click', init)
}

const selectResume = () => {
  const resume = document.querySelector(RESUME_ID_ATTRIBUTE)
  const message = document.querySelector(
    '[data-qa="vacancy-response-letter-toggle"]'
  )

  resume.click()
  if (message) {
    message.click()
  }
}

const handlerCoverLetter = () => {
  const vacancyTitle = document.querySelector(
    '.bloko-modal-header_outlined > div'
  ).textContent
  const vacancyName = vacancyTitle.slice(1, vacancyTitle.length - 1)

  const messageArea = document.querySelector(
    '[data-qa="vacancy-response-popup-form-letter-input"]'
  )
  messageArea.value = COVER_LETTER_TEMPLATE(vacancyName)

  const evt = new Event('change')
  messageArea.dispatchEvent(evt)

  const btnSubmit = document.querySelector(
    '[data-qa="vacancy-response-submit-popup"]'
  )
  btnSubmit.click()
}

const hasRelocationTitleWarning = () =>
  !!document.querySelector('[data-qa="relocation-warning-title"]')

const confirmClickRelocation = () => {
  const btnSubmit = document.querySelector(
    '[data-qa="relocation-warning-confirm"]'
  )
  btnSubmit.click()
}

const init = async () => {
  const vacancies = document.querySelectorAll(
    '[data-qa="vacancy-serp__vacancy_response"]'
  )
  const vacancy = document.querySelector(
    '[data-qa="vacancy-response-link-top"]'
  )

  if (vacancy) {
    vacancy.click()
    await delay(DELAY_1000)
    selectResume()
    await delay(DELAY_500)
    handlerCoverLetter()
  } else {
    for (let i = 0; i < vacancies.length; i++) {
      vacancies[i].click()
      await delay(DELAY_1000)
      if (hasRelocationTitleWarning()) {
        confirmClickRelocation()
      }
      await delay(DELAY_1000)
      selectResume()
      await delay(DELAY_500)
      handlerCoverLetter()
      await delay(DELAY_1000)
    }
  }
}

addNavLinks()
