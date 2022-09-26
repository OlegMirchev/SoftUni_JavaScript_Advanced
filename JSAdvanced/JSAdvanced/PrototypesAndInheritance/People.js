function solution() {

    class Employee {
        constructor(name, age, salary) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.task = [];
            this.currentIndex = 0;
        }

        work() {
            if (this.task.length - 1 < this.currentIndex) {
                this.currentIndex = 0;
            }

            console.log(this.task[this.currentIndex]);
            this.currentIndex++;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.task = [`${name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.task = [`${name} is working on a complicated task.`,
                         `${name} is taking time off work.`,
                         `${name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.task = [`${name} scheduled a meeting.`,
                         `${name} is preparing a quarterly report.`];
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();
junior.work();
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();