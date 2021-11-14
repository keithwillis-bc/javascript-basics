let myObj = {
  age: 32,
  userName: "Keith",
  hobbies: ["Bowling", "Football", "Programming"],

  adultYears: function () {
    return this.age - 18;
  },
};

let person = {
  name: "Keith",
  greet() {
    console.log("Hello, " + this.name);
  },
};

console.log(myObj.hobbies[0]);
console.log(myObj.adultYears());
myObj.age = 45;
console.log(myObj.adultYears());

person.greet();
