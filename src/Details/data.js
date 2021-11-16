var faker = require("faker");

let meta = () => {
  return {
    name: faker.name.findName(),
    calories: faker.random.number(),
    fat: faker.random.number(),
    carbs: faker.random.number(),
    protein: faker.random.number(),
  };
};

let newdata = [...Array(9)].map((_, idx) => meta());
export default newdata;
