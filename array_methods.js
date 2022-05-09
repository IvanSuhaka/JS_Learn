const names = ["Ivan", "Alexey", "Ilya", "Evgeniy", "Slava"]
names.splice(5, 0, "Valera", "Denchik")
console.log(names)

// splice добавляет или удаляет элементы массива
// 1-ый аргумент - индекс элемента
// 2-ой аргумент - сколько элементов удалить
// 3-ий и последующие аргументы - что добавить

// ------------------------------------------------------------------------------------------

const languages = ["Java", "Python", "PHP", "C++", "JS", "Go"]
const newList = languages.slice(2, 4)
console.log(newList)

// slice копирует элементы массива и создает из них новый массив
// 1-ый аргумет - индекс элемента, с которого начинается копирование
// 2-ой аргумент - индекс до которого идет копирование (НЕ ВКЛЮЧАЯ)

// ----------------------------------------------------------------------------------------------

const companies1 = ["Apple", "Microsoft", "Amazon"]
const companies2 = ["Netflix", "NVIDIA", "Gazprom"]
const companies = companies1.concat(companies2)
console.log(companies)

// concat объединяет несколько массивов в один, принимает неограниченное количество аргументов

// ---------------------------------------------------------------------------------------------

const cars = [
    {id: 1, model: "Ferrari"},
    {id: 2, model: "Audi"},
    {id: 3, model: "Porsche"}
];

const audi = cars.find(function(item) {
    return item.model === "Audi";
})

const audi2 = cars.find(item => item.model === "Audi")

console.log(audi)
console.log(audi2)

// find возвращает значение первого элемента, найденного в массиве. Запускается для каждого элемента в массиве
// 1-ый аргумент - элемент массива, до которого в данный момент добрался метод
// 2-ой аргумент - индекс этого элемента
// 3-ий аргумент - массив

// findIndex - тоже самое, только возвращает индекс элемента, а не сам элемент

// ------------------------------------------------------------------------------------------


const cars2 = [
    {id: 1, model: "Ferrari"},
    {id: 2, model: "Nissan"},
    {id: 3, model: "Porsche"},
    {id: 4, model: "Toyota"}
];

const filterCars = cars2.filter(item => item.id % 2 === 0);
console.log(filterCars)

// filter похож на find с той разницей, что не завершает свою работу после первого найденного элемента,
// а проходит по всему массиву до конца. Возвращает массив

const numbers = [2, 5, 7, 9]
const results = numbers.map(n => n ** 5)
console.log(results)

// map создает новый массив их элементов, которые будут являться результатом выполнения callback-функции
// У метода 1 аргумент - callback-функция, у функции 3 аргумента:
// 1) Текущий элемент
// 2) Индекс элемента
// 3) Массив