type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends  Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mert",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   // typeguard
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo: " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

// Type casting
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

interface ErrorContainer {
  // { email: 'Not a valid email', username: "Must start with a character"}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a character",
};
