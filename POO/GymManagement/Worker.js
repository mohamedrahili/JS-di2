class Worker {
    constructor(name, age, salary, position) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }

    showWorkerInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Position: ${this.position}`);
    }
}

module.exports = Worker;