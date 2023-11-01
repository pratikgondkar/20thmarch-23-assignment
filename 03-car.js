class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `this is a ${this.year} ${this.company} ${this.model}`;
    }
}
const myCar = new Car("skoda", "Rapid", 2023);
console.log(myCar.getDescription());