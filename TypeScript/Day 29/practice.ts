class Employee1 {
    constructor(
        public readonly id: number,
        public name: string,
        protected department: string,
        private salary: number
    ) { }

    public getSalary(): number {
        return this.salary;
    }

    public increaseSalary(amount: number): void {
        if (amount > 0) {
            this.salary += amount;
        }
    }
}
const employee = new Employee1(
    101,
    "Salman",
    "Engineering",
    50000
);

console.log(employee.id);
console.log(employee.name);
console.log(employee.getSalary());

employee.name = "Ahmed";

employee.id = 200;

console.log(employee.salary);

console.log(employee.department);