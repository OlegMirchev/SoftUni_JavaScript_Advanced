class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        Object.defineProperty(this, 'fullName', {
            get: function() {
                return `${this.firstName} ${this.lastName}`;
            },

            set: function(fullName) {
                let[firstName, lastName] = fullName.split(' ');

                if (firstName && lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
            }
        });
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
