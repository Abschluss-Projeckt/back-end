import mongoose from "mongoose";
import User from "./User.js";

export const category = new mongoose.Schema(
  {
    mealType: {
      type: String,
      enum: [
        "Appetizer",
        "Main Course",
        "Breakfast",
        "Salad",
        "Dessert",
        "Snacks",
        "Drinks",
      ],
    },

    meal: {
      type: String,
      enum: [
        "Meat Dishes",
        "Fish Dishes",
        "Pizza & Pasta",
        "Baking",
        "Soups & Stews",
        "Salad",
        "Sides",
        "Dessert",
        "Casserole",
        "Snacks",
      ],
    },

    region: {
      type: String,
      enum: [
        "Asian",
        "Chinese",
        "German",
        "British",
        "French",
        "Arabic",
        "Greek",
        "Indian",
        "Italian",
        "Japanese",
        "Mexican",
        "European",
        "Spanian",
        "Türkish",
        "Orientalish",
      ],
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

export const ingredients = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: Number,
  measure: String,
});

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
