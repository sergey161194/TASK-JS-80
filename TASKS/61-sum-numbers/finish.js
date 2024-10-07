/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

function sumNumbers1() {
    let calc = 0
    for (let i = 0; i < arguments.length; i++) {
        calc += arguments[i]
    }
    console.log(calc)
}

function sumNumbers2() {
    let calc = 0
    for (let i = 0; i < arguments.length; i++) {
        calc += arguments[i]
    }
    return calc;
}


sumNumbers1(1,3,5,2)
// 4

sumNumbers1(10, 20, 5)
// 35

sumNumbers1(2, 5, 80, 1, 10, 12)
// 110


console.log(sumNumbers2(1,3,5,2))
console.log(sumNumbers2(10, 20, 5))
console.log(sumNumbers2(2, 5, 80, 1, 10, 12))
