//test
class Person {
  name: string;
  age: number;
  phone: string;

  constructor(name: string, age: number, phone: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    console.log("A person was created");
  }

  showInfos() {
    console.log(
      `The Name is ${this.name}, The age is ${this.age}, the phone is ${this.phone}`
    );
  }
}

let person = new Person("Kamal Cafarov", 58, "0777477112");
person.showInfos();

class Employee extends Person {
  salary: number;
  constructor(name, age, phone, salary) {
    super(name, age, phone);
    this.salary = salary;
  }

  changeDep() {
    console.log("Alish changed Department...");
    //Fix bugs here
  }
}

let emp = new Employee("Orxan Qurbanov", 45, 7774555, 1500);
emp.showInfos();
