const generateGameField = (rows, columns) => {
    // проверка или валидация входящих параметров
    if (rows > 16) rows = 16;
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
document.getElementById("game-restart").addEventListener("click", () => generateGameField(16, 30));
