"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName;
}
var a;
var user = new Student("Luis", "M.", "User");
document.body.innerHTML = greeter(user);
