const members = require('./Member');
const workers = require('./Worker');  

class Gym {
    constructor(name = "Saiyans Gym", members = [], workers = []) {
        this.name = name;
        this.members = members;
        this.workers = workers;
    }

    addMember(member) {
        this.members.push(member);
    }

    removeMember(member) {
        this.members = this.members.filter(m => m.name !== member.name);
    }

    getMemberByName(name) {
        return this.members.find(m => m.name === name);  
    }

    getMemberByAge(age) {
        return this.members.filter(m => m.age === age);
    }
    
    getMemberBySport(sport) {
        return this.members.filter(m => m.sport === sport);
    }

    getMemberByMembershipDuration(membershipDuration) {
        return this.members.filter(m => m.membershipDuration === membershipDuration);
    }

    getMemberByMembershipStartDate(membershipStartDate) {
        return this.members.filter(m => m.membershipStartDate === membershipStartDate);
    }

    getMemberByMembershipEndDate(membershipEndDate) {
        return this.members.filter(m => m.membershipEndDate === membershipEndDate);
    }

    addWorker(worker) {
        this.workers.push(worker);
    }

    removeWorker(worker) {
        this.workers = this.workers.filter(w => w.name !== worker.name);
    }

    getWorkerByName(name) {
        return this.workers.find(w => w.name === name);
    }

    getWorkerByAge(age) {
        return this.workers.filter(w => w.age === age);
    }

    getWorkerBySalary(salary) {
        return this.workers.filter(w => w.salary === salary);
    }

    getWorkerByPosition(position) {
        return this.workers.filter(w => w.position === position);
    }

    listMembers() {
        return this.members;
    }

    listWorkers() {
        return this.workers;
    }   
}

const member1 = new members("Mohamed",18,1.80,80,"Calisthenics",12,"2025-01-01","2025-12-31");
const member2 = new members("Mouad",20,1.80,80,"Boxing",5,"2025-01-01","2025-5-31");
const member3 = new members("Sofian",19,1.80,80,"Climing",3,"2025-01-01","2025-3-31");
const member4 = new members("Sara",20,1.80,80,"Yoga",3,"2025-01-01","2025-3-31");

const worker1 = new workers("Solaiman",18,5000,"Trainer");
const worker2 = new workers("Abdellah",20,6000,"Manager");
const worker3 = new workers("Ikram",19,7000,"Assistant");
const worker4 = new workers("Douaa",20,8000,"Doctor");

const myGym = new Gym;

console.log("Adding New Member:");
myGym.addMember(member1);
myGym.addMember(member2);
myGym.addMember(member3);
myGym.addMember(member4);

console.log("Adding New Worker:");
myGym.addWorker(worker1);
myGym.addWorker(worker2);
myGym.addWorker(worker3);
myGym.addWorker(worker4);

console.log("Listing Members:");
console.log(myGym.listMembers());

console.log("Listing Workers:");
console.log(myGym.listWorkers());

console.log("Removing Member:");
myGym.removeMember(member1);

console.log("Listing Members:");
console.log(myGym.listMembers());

console.log("Removing Worker:");
myGym.removeWorker(worker1);

console.log("Listing Workers:");
console.log(myGym.listWorkers());

console.log("Get Member By Name:");
console.log(myGym.getMemberByName("Sara"));

console.log("Get Member By Age:");
console.log(myGym.getMemberByAge(20));

console.log("Get Member By Sport:");
console.log(myGym.getMemberBySport("Yoga"));

console.log("Get Member By Membership Duration:");
console.log(myGym.getMemberByMembershipDuration(1));

console.log("Get Member By Membership Start Date:");
console.log(myGym.getMemberByMembershipStartDate("2022-01-01"));

console.log("Get Member By Membership End Date:");
console.log(myGym.getMemberByMembershipEndDate("2022-12-31"));

console.log("Get Worker By Name:");
console.log(myGym.getWorkerByName("Mohamed"));

console.log("Get Worker By Age:");
console.log(myGym.getWorkerByAge(30));

console.log("Get Worker By Salary:");
console.log(myGym.getWorkerBySalary(5000));

console.log("Get Worker By Position:");
console.log(myGym.getWorkerByPosition("Manager"));

console.log("Listing Members:");
console.log(myGym.listMembers());

console.log("Listing Workers:");
console.log(myGym.listWorkers());