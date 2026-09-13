"use strict";
class Employee1 {
    id;
    name;
    department;
    salary;
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary(amount) {
        if (amount > 0) {
            this.salary += amount;
        }
    }
}
const employee = new Employee1(101, "Salman", "Engineering", 50000);
console.log(employee.id);
console.log(employee.name);
console.log(employee.getSalary());
employee.name = "Ahmed";
employee.id = 200;
console.log(employee.salary);
console.log(employee.department);
