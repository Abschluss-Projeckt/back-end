import mongoose from "mongoose";
import User from "./User.js";

export const category = new mongoose.Schema(
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
    _id: false,
    versionKey: false,
  }
);

export const comments = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const recipeRanking = new mongoose.Schema(
  {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
  },
  {
    _id: false,
    versionKey: false,
  }
);
