console.log("run seed script");

import { faker } from "@faker-js/faker";
import Recipe from "./models/Recipe.js";
// import User from "./models/User.js";
import "./lib/mongoose.js";

// const albums = [];

const mealType = [
  "Vorspeise",
  "Hauptspeise",
  "Frühstück",
  "Dessert",
  "Snack",
  "Getränke",
];

const meal = [
  "Fleischgerichte",
  "Fischgerichte",
  "Pizza & Pasta",
  "Backen",
  "Suppe & Eintopf",
  "Salat",
  "Beilagen",
  "Dessert",
  "Auflauf",
  "Snacks",
];

const region = [
  "Asiatisch",
  "Chinesisch",
  "Deutsch",
  "Englisch",
  "Französisch",
  "Arabisch",
  "Griechisch",
  "Indisch",
  "Italienisch",
  "Japanisch",
  "Mexikanisch",
  "Osteuropäisch",
  "Spanisch",
  "Türkisch",
  "Orientalisch",
];

const nutrition = [
  "Vegan",
  "Vegetarisch",
  "Zuckerfrei",
  "Laktosefrei",
  "Glutenfrei",
  "Alkoholfrei",
];

const category = () => ({
  mealType: mealType[Math.floor(Math.random() * mealType.length)],
  meal: meal[Math.floor(Math.random() * meal.length)],
  region: region[Math.floor(Math.random() * region.length)],
  nutrition: nutrition[Math.floor(Math.random() * nutrition.length)],
});

const stepGenerator = () => {
  const steps = [];
  for (let i = 0; i < 5; i++) {
    steps.push(faker.lorem.sentence(5));
  }
  return steps;
};

const ingredientGen = () => {
  const ingredients = [];
  for (let i = 0; i < 5; i++) {
    ingredients.push(faker.lorem.word());
  }
  return ingredients;
};

const addRecipe = async () => {
  const newRecipe = await Recipe.create({
    name: faker.lorem.words(3),
    image: faker.image.food(640, 480, true),
    description: stepGenerator(),
    ingredients: ingredientGen(),
    category: category(),
    time: faker.datatype.number({ min: 10, max: 100 }),
    portion: faker.datatype.number({ min: 2, max: 6 }),
  });
};

// const createAlbum = async () => {
//   const newAlbum = new Album({
//     name: faker.word.noun(),
//     date: faker.date.past(),
//     creator: faker.name.fullName(),
//   });

//   const result = await newAlbum.save();
//   albums.push(result._id);
// };

const addRecipes = async (count = 20) => {
  for (let i = 0; i < count; i++) {
    console.log("adding recipe: ", i + 1);
    await addRecipe();
  }
};

// const createAlbums = async (count = 20) => {
//   for (let i = 0; i < count / 4; i++) {
//     console.log("creating album: ", i + 1);
//     await createAlbum();
//   }
// };

try {
  if (!process.argv.includes("doNotDelete")) {
    console.log("deleting all recipes...");
    await Recipe.deleteMany();
    console.log("done");
  }

  console.log("adding new recipes...");
  await addRecipes(
    process.argv[2] === "doNotDelete" ? undefined : process.argv[2]
  );
  console.log("done");

  console.log("seeding finished, happy coding!");
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
