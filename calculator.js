function Calculator() {
  /**
   * this will read the data using prompt
   */
  this.read = function () {
    /**
     * default value of prompt is 0
     * for parsing the string value of prompt, either append +
     * or use Number.parseInt
     */
    this.num1 = +prompt("Enter number 1st", "0");
    this.num2 = Number.parseInt(prompt("Enter number 2nd", "0"));
  };

  /**
   * sum will return the total of two numbers
   */
  this.sum = function () {
    return this.num1 + this.num2;
  };

  /**
   * mul will return the product of two numbers
   */
  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let calc = new Calculator();
calc.read();

console.log(calc.sum());
console.log(calc.mul());
