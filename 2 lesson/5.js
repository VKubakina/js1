/** Функция складывает параметры
* @param {number} num1
* @param {number} num2
* @returns {namber} */
function addNamber (num1, num2) {
    return num1 + num2;
}
/** Функция делит параметры
* @param {number} num1
* @param {number} num2
* @returns {namber} */
function quotientNanber (num1, num2) {
    return num1 / num2;
}
/** Функция отнимает параметры
* @param {number} num1
* @param {number} num2
* @returns {namber} */
function differenceNumber (num1, num2) {
    return num1 - num2;
}
/** Функция перемножает параметры
* @param {number} num1
* @param {number} num2
* @returns {namber} */
function multiplicationNumber (num1, num2) {
    return num1 * num2;
}
/**
 * Фунция выполняет математическую операцию между заданными числами
 * @param {number} arg1
 * @param {number} arg2
 * @param {string) operation
 */
function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addNamber (arg1, arg2);
        case '/':
            return quotientNanber (arg1, arg2);
        case '-':
            return differenceNumber (arg1, arg2);
        case '*':
            return multiplicationNumber (arg1, arg2);        
    }
}

alert (mathOperation (3, 4, '+'));
alert (mathOperation (12, 4, '/'));
alert (mathOperation (7, 4, '-'));
alert (mathOperation (3, 4, '*'));