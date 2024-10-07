/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum() {
        const initialValue = 0;
        return this.reduce(
            (accumulator, currentValue) =>
                typeof currentValue === 'number' ? accumulator + currentValue: accumulator,
            initialValue,
        );
    }

    onlyNumbers() {
        return this.filter(el => typeof el === 'number');
    }

}

const extendedArrayTest = new ExtendedArray(31, 235, 'fw', 'йцуфыв')
console.log(extendedArrayTest.onlyNumbers())

const sumTest = new ExtendedArray(true, 33, 23, 'fw', 32)
console.log(sumTest.sum())

sumTest.forEach(el => console.log(el))