
const generateGameField = (rows, columns) => {
    // проверка или валидация входящих параметров
    if (rows > 30) rows = 30;
    if (columns > 30) columns = 30;

    if (rows < 9) rows = 9;
    if (columns < 9) columns = 9;

    // нашли контейнер игрового поля
    const gameFieldContainer = document.getElementById("game-field");

    // отчистим иговое поле
    gameFieldContainer.innerHTML = "";

    // обновим размеры игрового поля
    gameFieldContainer.style.gridTemplateColumns = `repeat(${columns}, 24px)`;
    gameFieldContainer.style.gridTemplateRows = `repeat(${rows}, 24px)`;

    // считаем конечное еоличество кнопок на игровом поле
    const buttonsAmount = rows * columns;

    // заполним игровое поле нужным количеством кнопок
    const fragment = document.createDocumentFragment();
    for (let step = 1; step <= buttonsAmount; step++) {
        // создадим игровую кнопку
        const button = document.createElement("button");
        button.classList.add("closed");
        fragment.appendChild(button);
    }

    // добавим список кнопок на игровое поле
    gameFieldContainer.appendChild(fragment);
};

generateGameField(3, 3);
document.getElementById("level_one").addEventListener("click", () => generateGameField(9, 9));
document.getElementById("level_two").addEventListener("click", () => generateGameField(16, 16));
document.getElementById("level_three").addEventListener("click", () => generateGameField(16, 30));

/*
-2. создать переменную в общем ящике которая будет хранить текущие размеры поля
-1. Общий ящик это наш файл в котором мы пишем код = test.js файл
0. каждый раз когда вызывается функ. generateGameField нам нужно сохранить размеры поля в переменную в общем ящике (ящик = scope) (переменная лежащая в общем ящике это глобальная переменная)
1. Мне нужно повесить слушатель на клик события
2. Этот слушатель должен вызвать функ. generateGameField
3, функ. generateGameField нужно вызвать с правильными параметрами
3/1 равильные параметры это предэдущий размер поля.
 */

// New

// Привет Макс правильно ли я начинаю?

const restartGameFieldRestart = (level_one, level_two, level_three) => {
  const gameRestartButton = document.getElementById("game-restart");
  level_one = (generateGameField(9, 9));
}

restartGameFieldButton(9, 9)
