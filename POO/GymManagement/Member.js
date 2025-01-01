class Member{
    constructor(name, age, height, weight, sport, membershipDuration, membershipStartDate, membershipEndDate){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sport = sport;
        this.membershipDuration = membershipDuration;
        this.membershipStartDate = membershipStartDate;
        this.membershipEndDate = membershipEndDate;
    }

    showMemberInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Height: ${this.height}, Weight: ${this.weight}, Sport: ${this.sport}, Membership Duration: ${this.membershipDuration}, Membership Start Date: ${this.membershipStartDate}, Membership End Date: ${this.membershipEndDate}`);
    }
}

module.exports = Member;