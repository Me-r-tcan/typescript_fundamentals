class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`${this.id} - Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, name: string, admins: string[]) {
    super(id, name);
    this.admins = admins;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new ITDepartment("#1", "Itttttttttttttttsssss", ["Mert"]);
accounting.addEmployee("Mert");
accounting.addEmployee("Baş");
console.log(accounting.describe());
accounting.printEmployeeInformation();
