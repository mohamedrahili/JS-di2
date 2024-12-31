const student = require('./Student');
const teacher = require('./Teacher');

class School{
    constructor(name = "Omnia School Of Business And Technology", students = [], id = 0, teachers = [], courses = [], year = 0, speciality = "", subject = "") {
        this.name = name;
        this.students = students;
        this.id = id;
        this.teachers = teachers;
        this.courses = courses;
        this.year = year;
        this.speciality = speciality;
        this.subject = subject;
    }

    addsTudent(student) {
        this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    removeStudent(student) {
        this.students = this.students.filter(s => s.name !== student.name);
    }

    removeTeacher(teacher) {
        this.teachers = this.teachers.filter(t => t.name !== teacher.name);
    }
    getStudentByName(name) {
        return this.students.find(s => s.name === name);
    }

    getStudentById(id) {
        return this.students.find(s => s.id === id);
    }

    getStudentBySpeciality(speciality) {
        return this.students.filter(s => s.speciality === speciality);
    }

    getTeacherByName(name) {
        return this.teachers.find(t => t.name === name);
    }

    getTeacherById(id) {
        return this.teachers.find(t => t.id === id);
    }

    getTeacherBySubject(subject) {
        return this.teachers.filter(t => t.subject === subject);
    }

    listStudents() {
        if (this.students.length === 0) {
            console.log("No student in the school.");
        } else {
            this.students.forEach(student => student.showStudentInfo());
        }
    }

    listTeachers() {
        if (this.teachers.length === 0) {
            console.log("No teacher in the school.");
        } else {
            this.teachers.forEach(teacher => teacher.showTeacherInfo());
        }
    }
}

const student1 = new student("Mohamed Ouahib", 1, 18, "Computer Science",2);
const student2 = new student("Mouad Bougayo", 2, 20, "Computer Science", 2);
const student3 = new student("Sofian Jalbawi", 3, 19, "Computer Science", 2);
const student4 = new student("Sara Mziguira", 4, 20, "Computer Science", 2);
const student5 = new student("Rim Rima", 5, 20, "Graphic Design", 2);
const student6 = new student("Omar El Haddad", 6, 20, "Graphic Design", 2);

const teacher1 = new teacher("Mohamed Harik", 1, 35, "Front End and Back End Development");
const teacher2 = new teacher("Sick Matar", 2, 35, "Mobile App Development");
const teacher3 = new teacher("Dan Lok", 2, 35, "High Tickit Closing");
const teacher4 = new teacher("Kamal", 4, 35, "Devops");
const teacher5 = new teacher("Yassin", 5, 35, "Data Science");
const teacher6 = new teacher("Chifaa", 6, 35, "UML");

const mySchool = new School;

console.log("Adding New Student:");
mySchool.addsTudent(student1); // Note the method name change
mySchool.addsTudent(student2);
mySchool.addsTudent(student3);
mySchool.addsTudent(student4);
mySchool.addsTudent(student5);
mySchool.addsTudent(student6);

console.log("Adding New Teacher:");
mySchool.addTeacher(teacher1);
mySchool.addTeacher(teacher2);
mySchool.addTeacher(teacher3);
mySchool.addTeacher(teacher4);
mySchool.addTeacher(teacher5);
mySchool.addTeacher(teacher6);

console.log("Listing Students:");
mySchool.listStudents();

console.log("Listing Teachers:");
mySchool.listTeachers();

console.log("Removing Student:");
mySchool.removeStudent(student3);

console.log("Removing Teacher:");
mySchool.removeTeacher(teacher2);

console.log("Listing Students:");
mySchool.listStudents();

console.log("Listing Teachers:");
mySchool.listTeachers();

console.log("Get Student By Name:");
const studentByName = mySchool.getStudentByName("Mohamed Ouahib");
console.log(studentByName);

console.log("Get Student By ID:");
const studentById = mySchool.getStudentById(1);
console.log(studentById);

console.log("Get Student By Speciality:");
const studentBySpeciality = mySchool.getStudentBySpeciality("Computer Science");
console.log(studentBySpeciality);

console.log("Get Teacher By Name:");
const teacherByName = mySchool.getTeacherByName("Dan Lok");
console.log(teacherByName);

console.log("Get Teacher By ID:");
const teacherById = mySchool.getTeacherById(4);
console.log(teacherById);

console.log("Get Teacher By Subject:");
const teacherBySubject = mySchool.getTeacherBySubject("Devops");
console.log(teacherBySubject);

console.log("Liste All Students:");
mySchool.listStudents();

console.log("List All Teachers:");
mySchool.listTeachers();