/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

// 1
const niceGuitar = 'Fender'

// 2
!(niceGuitar instanceof String) ? console.log('Не экземпляр класса String') : console.log('Экземпляр класса String')

// 3
typeof niceGuitar === "string" ? console.log('Имеет тип \'string\'') : console.log('Не имеет тип \'string\'')

// 4
const upperCaseString = niceGuitar.toUpperCase()

// 5
console.log(upperCaseString)
