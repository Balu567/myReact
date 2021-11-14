var faker = require("faker");

const newdata = [
  {
    name: faker.name.findName(),
    calories: faker.random.number(),
    fat: faker.random.number(),
    carbs: faker.random.number(),
    protein: faker.random.number(),
  },
  {
    name: faker.name.findName(),
    calories: faker.random.number(),
    fat: faker.random.number(),
    carbs: faker.random.number(),
    protein: faker.random.number(),
  },
];

export default newdata;
