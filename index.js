// require inquirer?



class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`Name: ${this.name}`); 
        console.log(`ID: ${this.id}`);  
        console.log(`Email: ${this.email}`);
    }

}



class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
        
    }
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
}

class Intern extends Employee {
    constructor(school){
        this.school = school;
    }
}



const manager = new Manager("Ned Stark", 1, "winterfell@gmail.com", 10);
manager.printInfo();

