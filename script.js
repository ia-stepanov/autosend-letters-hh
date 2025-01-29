// Функция паузы
var delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// получить кнопку "откликнуться" после заполнения сопроводительного письма
var getResponseSubmitButton = () =>
  document.querySelector('[data-qa="vacancy-response-submit-popup"]');

var resolveRelocationConfirmModal = () => {
  var buttonConfirmRelocation = document.querySelector(
    '[data-qa="relocation-warning-confirm"]'
  );

  if (!buttonConfirmRelocation) {
    return;
  }
  buttonConfirmRelocation.click();
};

var resolveResponseMessageModal = async () => {
  var btnSubmit = getResponseSubmitButton();

  // если мы обнаружили кнопку отправки, то...
  if (!btnSubmit) {
    throw Error("Submit button not exists or renamed");
  }
  // выбираем резюме
  selectResume();

  await delay(1137);
  // заполняем сопроводительное и отправляем его
  await handlerCoverLetter();
};

var getMessage = (vacancyName) => `Добрый день!

Меня заинтересовала предложенная Вами вакансия ${vacancyName}. Ознакомившись с перечнем требований к кандидатам, пришел к выводу, что мой опыт работы позволяют мне претендовать на данную должность.

Обладаю высоким уровнем фронтенд-разработки, свободно говорю по-английски. В работе ответствен, пунктуален и коммуникабелен.

Буду с нетерпением ждать ответа и возможности обсудить условия работы и взаимные ожидания на собеседовании. Спасибо, что уделили время.

Контактные данные прилагаю.`;

var resolveModal = async () => {
  await delay(800);

  // на случай если вылазит модальное окно о "вы живёте не там, готовы переехать?"
  resolveRelocationConfirmModal();

  await delay(765);

  await resolveResponseMessageModal();

  await delay(400);
};

var pasteMessageToArea = async (message) => {
  var messageArea = document.querySelector(
    '[data-qa="vacancy-response-popup-form-letter-input"]'
  );

  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    "value"
  ).set;

  nativeInputValueSetter.call(messageArea, message);

  messageArea.dispatchEvent(new Event("input", { bubbles: true }));
};

// Функция для автоматического выбора резюме
var selectResume = () => {
  var resume = document.querySelector("#resume_ID_РЕЗЮМЕ");

  var message = document.querySelector(
    '[data-qa="vacancy-response-letter-toggle"]'
  );

  if (!message) {
    resume.click();
  } else {
    resume.click();
    message.click();
  }
};

// Функция для автоматической отправки Сопроводительного письма
var handlerCoverLetter = async () => {
  // Шаблон Сопроводительного письма
  var vacancyTitle = document.querySelector(
    ".bloko-modal-header_outlined > div"
  ).textContent;
  var vacancyName = vacancyTitle.slice(1, vacancyTitle.length - 1);

  // Добавить изменения в поле текста
  await pasteMessageToArea(getMessage(vacancyName));

  // Отправить отклик
  await delay(1192);

  var btnSubmit = getResponseSubmitButton();
  btnSubmit.click();
};

var init = async () => {
  var vacancies = document.querySelectorAll(
    '[data-qa="vacancy-serp__vacancy_response"]'
  );
  var vacancy = document.querySelector('[data-qa="vacancy-response-link-top"]');

  // Вызвать функцию на странице с вакансией
  if (vacancy) {
    vacancy.click();

    await delay(1293);
    selectResume();

    await delay(894);
    await handlerCoverLetter();
  }
  // Иначе вызвать функцию на странице со списком вакансий
  else {
    for (let i = 0; i < vacancies.length; i += 2) {
      var vacancy = vacancies[i];

      vacancy.click();

      await delay(600);
      await resolveModal();
    }
  }
};

// Добавить на панель доп. функционал
(async function addNavLinks() {
  await delay(1000);

  var navLinks = document.querySelectorAll(
    ".supernova-navi.supernova-navi_lvl-2.HH-Supernova-NotificationManager-Container.supernova-navi_shaded.supernova-navi_dashboard-redesign"
  );

  var itemLetters = document.createElement("div");

  function createElement(item, attribute, title) {
    item.classList.add(
      "supernova-navi-item",
      "supernova-navi-item_lvl-2",
      "supernova-navi-item_no-mobile"
    );

    item.innerHTML = `
    <a
      data-qa="mainmenu_vacancyResponses"
      class="supernova-link"
      ${attribute}
    >
      ${title}
    </a>
    <div class="supernova-navi-underline">${title}</div>
    `;
  }

  createElement(itemLetters, "handler-letters", "Отправить отклики");

  navLinks[0].append(itemLetters);
  document.querySelector("[handler-letters]").addEventListener("click", init);
})();
