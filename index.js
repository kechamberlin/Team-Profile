const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");



class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {

    }
    getID() {

    }
    getEmail() {

    }
    getRole() {
        return "Employee";
    }
}


class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }
    getRole() {

    }
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        inquirer
            .prompt({
                message: "Enter your GitHub username",
                name: "username"
            })
            .then(function ({ username }) {
                const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
                axios.get(queryUrl).then(response => {
                    console.log(response.data[0].name);
                    const repositoryNames = response.data.map(repository => repository.name);
                    console.log(repositoryNames);
                })
            });
    }
    getRole() {

    }
}

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        
    }
}



printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
};




const manager = new Manager("Ned Stark", 1, "winterfell@gmail.com", 10);
manager.printInfo();

