class teacher {
    constructor(name, id, age, subject) {
        this.name = name;
        this.id= id;
        this.age = age;
        this.subject = subject;
    }
    showTeacherInfo() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}
module.exports = teacher;