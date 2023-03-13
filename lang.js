const langJs = {
  signature: {
    ru: "РАЗРАБОТЧИК",
    en: "DEVELOPER",
  },
  citi: {
    ru: "г.Москва",
    en: "Moscow",
  },
  texnologis: {
    ru: "Стек технологии:",
    en: "Technology stack:",
  },
  description1: {
    ru: "Лучший программист всех времен. Взломаю Пентагон, сверстаю сайт,поправлю кнопочку на 1 рх влево. Готов работать 24/7.",
    en: "The best programmer of all time. I'll hack the Pentagon, make up the site, I'll adjust the button 1 px to the left. Ready to work 24/7.",
  },
  description2: {
    ru: "В свободное время учу английский, китайский. Играю в игры. Люблю бутерброды с колбасой и сыром.",
    en: "I study English and Chinese in my free time. I play games. Love sandwiches with sausage and cheese.",
  },
};

function langButton() {
  let elem = document.body.querySelector("#langButton");
  elem = elem.value;
  if (elem == "en") {
    document.body.querySelector(
      'input[class="input form__message"]'
    ).placeholder = "message";
    document.body.querySelector('button[class="form__button"]').innerHTML =
      "Contact me";
  }
  if (elem == "ru") {
    document.body.querySelector(
      'input[class="input form__message"]'
    ).placeholder = "сообщение";
    document.body.querySelector('button[class="form__button"]').innerHTML =
      "Связаться со мной";
  }
  for (const key in langJs) {
    console.log("lang-" + key);
    document.body.querySelector(".lang-" + key).innerHTML = langJs[key][elem];
  }
}
