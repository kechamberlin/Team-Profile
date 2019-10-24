const fs = require("fs");
const inquirer = require("inquirer");


// ====== Employee ======

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
    // This method will convert input data into a string that will be then later be printed onto an HTML page via a function.
    buildHTMLString() {
        return `
        <h1>Name: ${this.name}</h1>
        <h1>ID: ${this.id}</h1>
        <h1>Email: ${this.email}</h1>
        <h1>Role: ${this.title}</h1>
        `
    }
}





// ====== Manager ======

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email, "Manager");
        this.officenumber = officenumber;
    }
    getRole() {
        return this.title;
    }
    printInfo() {
        super.printInfo();
        console.log(`Office Number: ${this.officenumber}`);
    }
    buildHTMLString() {
        return `${super.buildHTMLString()}
        <h1>Office Number: ${this.officenumber}</h1>
        `
    }
}

Manager.prompt = () => {
    return inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input", 
        message: "What is your full name?",
        name: "fullname"
      },
      {
        type: "number",
        message: "What is your ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
          type: "input",
          message: "What is your office number?",
          name: "officenumber"
    },
    ]).then(answers => {
        return new Manager(answers.fullname, answers.id, answers.email, answers.officenumber);
    })
}





// ====== Engineer ======

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }
    getGithub() {
        console.log(this.github);
    };

    getRole() {
        return this.title;
    }
    printInfo() {
        super.printInfo();
        console.log(`Github: ${this.github}`);
    }
    buildHTMLString() {
        return `${super.buildHTMLString()}
        <h1>GitHub: ${this.github}</h1>
        `
    }
}

Engineer.prompt = () => {
    return inquirer
    .prompt([
      {
        type: "input", 
        message: "What is your full name?",
        name: "fullname"
      },
      {
        type: "number",
        message: "What is your ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
          type: "input",
          message: "What is your GitHub username??",
          name: "github"
    },
    ]).then(answers => {
        return new Engineer(answers.fullname, answers.id, answers.email, answers.github);
    })
}




// ====== Intern ======

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        this.school = school;
    }
    getSchool() {
        console.log(this.school);
    }
    getRole() {
        return this.title;
    }
    printInfo() {
        super.printInfo();
        console.log(`Scool: ${this.school}`);
    }
    buildHTMLString() {
        return `${super.buildHTMLString()}
        <h1>School: ${this.school}</h1>
        `
    }
}

Intern.prompt = () => {
    return inquirer
    .prompt([
      {
        type: "input", 
        message: "What is your full name?",
        name: "fullname"
      },
      {
        type: "number",
        message: "What is your ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
          type: "input",
          message: "What university do/did you attend?",
          name: "school"
    },
    ]).then(answers => {
        return new Intern(answers.fullname, answers.id, answers.email, answers.school);
    })
}




// Generate the HTML page

const generatePage = (manager, engineer, intern) => {
    const wholePage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        ${manager.buildHTMLString()}
        ${engineer.buildHTMLString()}
        ${intern.buildHTMLString()}
    </body>
    </html>`
    console.log(wholePage);

    fs.writeFile("index.html", wholePage, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
}



async function main() {
    const manager = await Manager.prompt();

    const engineer1 = await Engineer.prompt();

    const intern1 = await Intern.prompt();
    
    generatePage(manager, engineer1, intern1);
}

main();



// ====== Ideas to finish this ======
    // Prompt the user in the Terminal whether they are a manager, engineer, or intern
    // If a manager, only prompt them for manager questions.
    // If an engineer, only prompt them for engineer questions.
    // If an intern, only prompt them for intern questions.

    // Can have only up to 2 managers
    // Can have only up to 4 engineers
    // Can have only up to 8 interns

    // 1 manager, 2 engineers, 4 interns

    // Differentiate hierarchy
        // That is, which MANAGER supervises which ENGINEERS who mentor which INTERNS
    
    // Place new worker into available spot
        // Example: if engineer1 has 4 interns, but engineer2 only have 3, place new intern with engineer2.
        // If both engineers have spots, randomly place an intern with either engineer.


    // Create styling for HTML pages either myself or through Bootstrap