"use strict"
// TODO: Завдання 1. Вывести в консоль все свойства и значения объекта user с учетом вложенных объектов.
// * properties - object values, including nested
// ? Solution option 1

let user = {
  name: "Elizaveta",
  fullname: "Yakovleva",
  age: "15",
  phoneNumber: "+3094943958479",
  skills: {
    html: 5,
    css: 4,
    js: 5,
  }
}
function keyVal(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") 
      keyVal(obj[key])
     else console.log(` ${key} : ${obj[key]}`)
  }
}
keyVal(user);

// ? Solution option 2
  //  function keyVal(obj) {
  //    for (let key in obj) {
  //      typeof obj[key] === "object" ? keyVal(obj[key]) : console.log(` ${key} : ${obj[key]}`)
  //    }
  //  }
  //  keyVal(user);

  // ? Solution option 3
  //   for (let key in user) {
  //     if (typeof(user[key]) === "object") {
  //       let copy = { ...user[key] };
  //       for (let key in copy) {
  //         console.log(key + "::" + copy[key]);
  //       }
  //     }
  //     else {
  //       console.log(key + "::" + user[key]);
  //     }
  //   }