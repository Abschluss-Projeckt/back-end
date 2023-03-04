import mongoose from "mongoose";

const category = new mongoose.Schema(
  {
    mealType: {
      type: String,
      enum: [
        "Vorspeise",
        "Hauptspeise",
        "Frühstück",
        "Dessert",
        "Snack",
        "Getränke",
      ],
      required: true,
    },

    meal: {
      type: String,
      enum: [
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
      ],
      required: true,
    },

    region: {
      type: String,
      enum: [
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
      ],
      required: true,
    },
    nutrition: {
      type: String,
      enum: [
        "Vegan",
        "Vegetarisch",
        "Zuckerfrei",
        "Laktosefrei",
        "Glutenfrei",
        "Alkoholfrei",
      ],
    },
  },
  {
    versionKey: false,
  }
);

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: Array,
      required: true,
    },

    ingredients: {
      type: Array,
      required: true,
    },

    category: category,

    image: {
      type: String,
      required: true,
    },

    time: {
      type: Number,
      required: true,
    },

    portion: {
      type: Number,
      required: true,
    },

    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
  },
  {
    versionKey: false,
  }
);

const Recipe = mongoose.model("Recipe", schema);

export const getAll = async () => {
  const recipes = await Recipe.find(); /*.populate("user")*/
  return recipes;
};

export const getOne = async (recipeId) => {
  const recipe = await Recipe.findById(recipeId); /*.populate("user")*/

  return recipe;
};

export const create = async (doc) => {
  const newRecipe = await Recipe.create(doc);

  return newRecipe;
};

export const updateOne = async (recipeId, data) => {
  const recipe = await Recipe.findByIdAndUpdate(recipeId, data, {
    new: true,

    runValidators: true,
  });

  return recipe;
};

export const replaceOne = async (recipeId, data) => {
  const recipe = await Recipe.findOneAndReplace(
    {
      _id: recipeId,
    },
    data,
    {
      returnDocument: "after",
      runValidators: true,
    }
  );
  return recipe;
};

export const deleteOne = async (recipeId) => {
  const recipe = await Recipe.findByIdAndDelete(recipeId);

  return recipe;
};

export default Recipe;
