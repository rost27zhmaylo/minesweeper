/*
 * Требование:
 * 1 Таймер должен запускаться когда пользыватель жмет на игровую кнопку
 * 2 Таймер должен игнорировать все последующие нажатия на игровые кнопки
 * 3 Таймер толжен стартовать с нуля и понаростающей с шагом в 1 сек.
 * 4 Таймер должен остановится на 999 сек.
 * 5 Таймер должен сбросится при перезапуске игры
 * 6 Таймер должен сбросится при изминении уровня игры
 * 7 Таймер должен остановится при окончании игры
 * */

/*
 * создать таймер
 *
 * кнопка рожа
 * кнопки уровней
 * первая нажатая кнопка игрового поля
 * конец игры
 * */

const createTimer = id => {
    // найдем элемент в котором лежит таймер
    const container = document.getElementById(id);

    const setTime = time => {
        // проверка или валидация входящих параметров
        time = ~~time; // целая часть числа
        if (time < 0) time = 0;
        if (time > 999) time = 999;

        // сформируем трех значное значение Time
        time = time.toString();
        for (let step = time.length; step < 3; step++) {
            time = `0${time}`;
        }

        // установим сформированное значение time
        const fragment = document.createDocumentFragment();
        for (let step = 1; step <= 3; step++) {
            // создадим цифру времени
            const span = document.createElement("span");
            span.classList.add(`d${time[step - 1]}`);
            fragment.appendChild(span);
        }

        // очистим таймер
        container.innerHTML = "";

        // добавим цифры в timer
        container.appendChild(fragment);
    };

    const timer = {
        start: () => {
            console.log("timer start");
        },
        stop: () => {
            console.log("timer stop");
        },
        reset: () => {
            setTime(0);
        },
    };

    return timer;
};
