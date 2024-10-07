/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const person = {
    name: 'Sergey',
    surname: 'Sergeev',
    favoriteNumber: 185,
}

const myText = `My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber}`
console.log(myText)
