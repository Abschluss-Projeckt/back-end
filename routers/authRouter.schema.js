export const postSchema = {
  type: "object",
  properties: {
    userName: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string" },
    image: { type: "string" },
    recipes: {
      type: "array",
      items: { type: "object" },
      minLength: 24,
      maxLength: 24,
    },
    likedRecipes: {
      type: "array",
      items: { type: "object" },
      minLength: 24,
      maxLength: 24,
    },
    shoppingList: { type: "object" },
  },
  required: [
    "userName",
    "email",
    "image",
    "recipes",
    "likedRecipes",
    "shoppingList",
  ],
  additionalProperties: false,
};
