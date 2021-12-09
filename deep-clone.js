const { cloneDeep } = require("lodash");

let a = {
  name: "Pratik",
  age: 21,
  hello: () => {
    console.log("Hello");
    return "from hello fn";
  },
  fullName: {
    fName: "Pratik",
    lName: "Sah",
  },
};

let b = cloneDeep(a);

a.hello = function hello() {
  console.log("Hi");
  return "from Hi fn";
};
b.fullName.fName = "Tunnu";

console.log(a.hello());
console.log(b.hello());
