// for (var i = 0; i < 5; i++) {
//   main(i);
// }
// function main(i) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

const kitchen = {
  name: "kitchen",
  purpose: "cook",
  order: "meal",

  cookFood() {
    console.log(`Serving ${this.order} in 2 mins`);
  },
};

const bedroom = {
  name: "bedroom",
  purpose: "sleep",
  order: "magiee",
};

kitchen.cookFood.call(bedroom);
