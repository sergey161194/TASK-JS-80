/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const setOfValues = [29, false, null, 'Hi', undefined, Symbol("id:324-234-232")]

console.log(setOfValues)

setOfValues[2] = 234

// другой способ
setOfValues.splice(1,1, true)

console.log(setOfValues)
