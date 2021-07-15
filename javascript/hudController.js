const creatHudController = (scoreContainerId, timerContainerId) => {
    const update = (container, value, allowNegative) => {
        // если allowNegative = false, то мы НЕ разрешаем отрицаельные
        // если allowNegative = true, то мы разрешаем отрицаельные
        // тернарка или тернарное выражение = сокращенный if () {} else {}
        allowNegative = allowNegative === undefined ? false : allowNegative;

        // true && true => true
        // true && false => false
        // false && true => false
        // false && false => false

        // true || true => true
        // true || false => true
        // false || true => true
        // false || false => false

        // проверка или валидация входящих параметров
        value = ~~value; // взяли только целую часть числа
        if (allowNegative === false && value < 0) value = 0;
        if (allowNegative === true && value < -99) value = -99;
        if (value > 999) value = 999;

        // сформируем трех символьное значение value в виде строки
        value = value.toString();
        for (let step = value.length; step < 3; step++) {
            value = `0${value}`;

            // пример трансофрмации
            // 2 -> 002
            // 15 -> 015
            // -1 -> 0-1
            // 777 -> 777
        }

        // трансформируем сформированное значение value в HTML
        // создадим невидимый/временный контейнер
        const fragment = document.createDocumentFragment();
        // каждый симфол положим вконце контейнера
        for (let step = 1; step <= 3; step++) {
            // создадим симфол в виде HTML span элемента
            const span = document.createElement("span");
            span.classList.add(`d${value[step - 1]}`);
            // кладем символ в конец невидимого/временного контейнера
            fragment.appendChild(span);
        }

        // очистим целевой контейнер от старого значения
        container.innerHTML = "";

        // добавим нвоые символы в целевой контейнер
        container.appendChild(fragment);
    };

    return {
        updateMinesAmount: minesAmount => {
            update(document.getElementById(scoreContainerId), minesAmount, true);
        },

        updateCurrentTime: currentTime => {
            update(document.getElementById(timerContainerId), currentTime, false);
        },
    };
};

const hudController = creatHudController("score", "timer");
