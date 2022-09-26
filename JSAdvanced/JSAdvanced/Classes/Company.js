class Company {
   constructor() {
       this.departments = {};
   }

   addEmployee(name, salary, position, department) {
       if (!name || salary < 0 || !salary || !position || !department) {
           throw new Error('Invalid input!');
       }

       if (!this.departments[department]) {
           this.departments[department] = [];
       }

       this.departments[department].push({name, salary, position});
       
       return `New employee is hired. Name: ${name}. Position: ${position}`
   }

   bestDepartment() {
       let bestDepartments = {
           name: '',
           salary: 0
       }

       for (const department in this.departments) {
           let averageSalary = 0;
           for (const employee in this.departments[department]) {
               averageSalary += this.departments[department][employee].salary;
           }

           averageSalary /= this.departments[department].length;

           if (bestDepartments.salary < averageSalary) {
               bestDepartments.name = department;
               bestDepartments.salary = averageSalary;
           }
       }

       this.departments[bestDepartments.name].sort((a, b) => {
           return b.salary - a.salary || a.name.localeCompare(b.name);
       });

       let bestDepartmentName = `Best Department is: ${bestDepartments.name}\n`;
       bestDepartmentName += `Average salary: ${bestDepartments.salary.toFixed(2)}\n`;

       for (const key of this.departments[bestDepartments.name]) {
           bestDepartmentName += `${key.name} ${key.salary} ${key.position}\n`;
       }

       return bestDepartmentName.trim();
   }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
