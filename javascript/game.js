// нашли контейнер игрового поля
const gameFieldContainer = document.getElementById("game-field");
const timer = createTimer();

let gameFieldRows;
let gameFieldColumns;
let gameMinesAmount;
let currentGameMinesAmount;

const generateGameField = (rows, columns, minesAmount) => {
    // проверка или валидация входящих параметров
    if (rows > 30) rows = 30;
    if (columns > 30) columns = 30;

    if (rows < 9) rows = 9;
    if (columns < 9) columns = 9;

    const maxMinesAmount = rows * columns * 0.25;
    if (minesAmount < 10) minesAmount = 10;
    if (minesAmount > maxMinesAmount) minesAmount = maxMinesAmount;

    // сохраняем игровые размеры игрового поля
    gameFieldColumns = columns;
    gameFieldRows = rows;
    gameMinesAmount = minesAmount;
    currentGameMinesAmount = minesAmount;

    timer.reset();
    hudController.updateMinesAmount(minesAmount);

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

gameFieldContainer.addEventListener("click", event => {
    timer.start();

    if (event.target.classList.contains("closed")) {
        event.target.classList.add("type0");
        event.target.classList.remove("closed");
    }
});

// добавил слушатель события на правый клик мыши
// при нажатии правой кнопки появляется флажок
// убрал контекстное меню при нажатии на правую кнопку
gameFieldContainer.addEventListener("contextmenu", event => {
    event.preventDefault();
    timer.start();

    if (event.target.classList.contains("flag")) {
        event.target.classList.add("closed");
        event.target.classList.remove("flag");

        currentGameMinesAmount++;
        hudController.updateMinesAmount(currentGameMinesAmount);
        return;
    }

    if (event.target.classList.contains("closed")) {
        event.target.classList.add("flag");
        event.target.classList.remove("closed");

        currentGameMinesAmount--;
        hudController.updateMinesAmount(currentGameMinesAmount);
        return;
    }
});

generateGameField(3, 3, 1);

// Генерирует поле сложности "Новичек"
document.getElementById("level_one").addEventListener("click", () => generateGameField(9, 9, 10));

// Генерирует поле сложности "Любитель"
document.getElementById("level_two").addEventListener("click", () => generateGameField(16, 16, 40));

// Генерирует поле сложности "Эксперт"
document
    .getElementById("level_three")
    .addEventListener("click", () => generateGameField(16, 30, 99));

// Обработчик события перезапуска игры на том же уровне сложности
document
    .getElementById("game-restart")
    .addEventListener("click", () =>
        generateGameField(gameFieldRows, gameFieldColumns, gameMinesAmount),
    );
