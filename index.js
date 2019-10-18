class Employee {
    constructor() {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Engineer extends Employee {
    constructor() {
        this.github = github;
    }
}

class Intern extends Employee {
    constructor(){
        this.school = school;
    }
}