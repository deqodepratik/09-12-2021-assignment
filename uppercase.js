/**
 * this code will take a string
 * it will set the first character of the string to uppercase
 */

class Uppercase {
  constructor(input) {
    this.input = input;
  }

  toUppercase() {
    let word = this.input;

    if (typeof word === "string") {
      // this will check if the first character is uppercase or not
      let isUppercase = word.charAt(0) === word.charAt(0).toUpperCase();
      // if it is uppercase, it will return the same word
      if (isUppercase) return this.input;
      // if it is not uppercase, it will convert it to the uppercase
      // and will retun the word from here
      return word[0].toUpperCase() + word.slice(1);
    }
  }
}

const a = new Uppercase("aman");
console.log(a.toUppercase());
