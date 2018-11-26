
class Student {
    public fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName;
}

let a;

let user = new Student("Luis", "M.", "User");

document.body.innerHTML = greeter(user);
