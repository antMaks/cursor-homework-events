// (!) Домашні завдання потрібно здавати у вигляді сторінки на GITPAGES. Відео про те, як здавати ДЗ

// Вам необхідно виконати завдання з популярного циклу челенджів: JS30. (Раджу після курсу – пройти його повністю, він безкоштовний)

// Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш та відтворювати унікальний звук для кожної клавіши (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати). В ідеалі повинно вийти як по посиланню.

// Тут можна знайти купу прикольних звуків безкоштовно

const audioPlay = src => {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = `${src}`;
  audio.play();
};

window.addEventListener(
  "keydown",
  function(event) {
    switch (event.key) {
      case "f":
        audioPlay("./assets/music/1.mp3");
        break;
      case "d":
        audioPlay("./assets/music/2.mp3");
        break;
      case "g":
        audioPlay("./assets/music/3.mp3");
        break;
      case "s":
        audioPlay("./assets/music/4.mp3");
        break;
      case "a":
        audioPlay("./assets/music/5.mp3");
        break;
      case "b":
        audioPlay("./assets/music/6.mp3");
        break;
    }
    event.preventDefault();
  },
  true
);
