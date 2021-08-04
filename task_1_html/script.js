// Создайте собственный объект Circle, который содержит:
// Свойство radius, которое инициализируется при вызове конструктора.
// Метод square который вычисляет площадь круга
// Статический метод createDefault, который вернет экземпляр Круга по умолчанию, с радиусом 10 - так называемый,
// метод “Фабрика”
// Попробуйте создать дефолтный Circle с помощью статического метода.
// Попробуйте создать несколько Circle для каждого из элементов массива: [21, 34, 15, 13]

class Circle {
    _radius = 0;
    pi = 3.14;
    constructor(radius) {
        this._radius = radius
    }
    square(_radius) {
        return this.pi * this._radius ** 2;
    };
    createDefault(radius = 10) {
        return this.pi * radius ** 2;
    };
};

const defaultCircle = new Circle();
console.log(defaultCircle.createDefault());
const arr = [21, 34, 15, 13];
arr.forEach((radius) => {
    const circle = new Circle(radius)
    console.log(circle.square())
});



const items = [
    "Молоко",
    "Орехи",
    "Кофе",
    "Сахар",
    "Хлеб",
    "Йогурт",
    "Сок",
    "Бананы",
    "Мандарины",
    "Шоколад",
    "Печенье",
];

class Search {
    constructor(selector, ul, items) {
        this.$element = document.querySelector(selector);
        this.$listElement = document.querySelector(ul);
        this.items = items;
        this.items.forEach((item) => {
            this.$listElement.innerHTML += `<li>${item}</li>`;
        });
        this.$element.append(this.$listElement);
        this.$element.addEventListener("click ", (event) => {
            this.$element.classList.toggle("active");
            if (event.target.nodeName === "LI") {
                onSelect(event.target);
            }
        });
    }
}


const search = new Search("#search", "#results", items)


class Results extends Search {
    constructor() {
        
    }
}
