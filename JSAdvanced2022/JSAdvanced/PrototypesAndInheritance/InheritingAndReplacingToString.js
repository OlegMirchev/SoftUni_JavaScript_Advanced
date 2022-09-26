function sovle() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            // Person (name: {name}, email: {email})
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            // Teacher (name: {name}, email: {email}, subject: {subject})
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }
    
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        
        toString() {
            // Student (name: {name}, email: {email}, course: {course})
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = sovle();
let Teacher = classes.Teacher;
let Person = classes.Person;
let Student = classes.Student;

let p = new Person('Pesho','pesho@pesho.com');