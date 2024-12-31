class student{
    constructor(name, id, age, speciality, year){
        this.name = name;
        this.id = id;
        this.age = age;
        this.speciality = speciality;
        this.year = year;
    }
    showStudentInfo(){
        console.log(`Student Name: ${this.name} ID: ${this.id} Age: ${this.age} Speciality: ${this.speciality} Year: ${this.year}`);
    }
}
module.exports = student;