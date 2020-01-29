class Employee {
    
  constructor(name, id, email) { //creates initial constructor to be used on other classes. must super into other classes
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

}

module.exports = Employee;