/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'volvo',
        price: 23000,
        isAvailableForSale: false
    },
    {
        carBrand: 'bmw',
        price: 56535,
        isAvailableForSale: false
    },
    {
        carBrand: 'ford',
        price: 7850,
        isAvailableForSale: true
    }
]

cars.push({
    carBrand: 'kia',
    price: 1256666,
    isAvailableForSale: false
})

console.log(cars);
