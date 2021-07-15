const createTimer = () => {
    let currentTime = 0;
    let timerInterval = null;

    return {
        start: () => {
            if (timerInterval === null) {
                timerInterval = setInterval(() => {
                    currentTime++;
                    hudController.updateCurrentTime(currentTime);

                    // Если таймер перевалил за 999, то нет смысла просить
                    // браузер считать секунды, поэтому остановим таймер
                    if (currentTime >= 999) {
                        clearInterval(timerInterval);
                        timerInterval = null;
                    }
                }, 1 * 1000);
            }
        },

        stop: () => {
            if (timerInterval !== null) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        },

        reset: () => {
            hudController.updateCurrentTime(0);
            if (timerInterval !== null) {
                clearInterval(timerInterval);
                timerInterval = null;
                currentTime = 0;
            }
        },
    };
};
