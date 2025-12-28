class Calculator {
  constructor(a, b, type_of_operation) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    this.a = a;
    this.b = b;
    this.type_of_operation = type_of_operation.toLowerCase();
  }

  operationSelector() {
    const operations = {
      add: () => this.addition(),
      sub: () => this.subtraction(),
      mul: () => this.multiplication(),
      div: () => this.division(),
    };
    if (!operations[this.type_of_operation]) {
      throw new Error("Invalid operation");
    }
    return operations[this.type_of_operation]();
  }

  addition() {
    return this.a + this.b;
  }

  subtraction() {
    return this.a - this.b;
  }

  multiplication() {
    return this.a * this.b;
  }

  division() {
    if (this.b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return this.a / this.b;
  }
}

try {
  const calc = new Calculator(10, 10, "div");
  console.log(calc.operationSelector());
} catch (error) {
  console.error(error.message);
}
