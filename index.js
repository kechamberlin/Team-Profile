class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        console.log(this.name);
    }
    getID() {
        console.log(this.id);
    }
    getEmail() {
        console.log(this.email);
    }
    getRole() {
        return this.title;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`Role: ${this.title}`);

    }
}


class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }
    getRole() {
        return this.title;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`Role: ${this.title}`);
        console.log(`Office Number: ${this.officenumber}`);
    }
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        console.log(this.github);
    };

    getRole() {
        return this.title;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`Role: ${this.title}`);
        console.log(`Github: ${this.github}`);
    }
}



class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        console.log(this.school);
    }
    getRole() {
        return this.title;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`Role: ${this.title}`);
        console.log(`Scool: ${this.school}`);
    }
}






const manager = new Manager("Ned Stark", 1, "winterfell@gmail.com", "Manager", 10);
manager.printInfo();

const engineer1 = new Engineer("Tyrion Lannister", 2, "crossbow@gmail.com", "Engineer", "blackwaterhero");
engineer1.printInfo();

const intern1 = new Intern("Hot Pie", 3, "ilovepie@gmail.com", "Intern", "UC Crossroads");
intern1.printInfo();

