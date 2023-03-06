export const postSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    descriptions: { type: "array", items: { type: "string" } },
    ingredients: { type: "array", items: { type: "string" } },
    category: { type: "object" },
    image: { type: "string" },
    time: { type: "number" },
    portion: { type: "number" },
    // user: {
    //   type: "string",
    //   minLength: 24,
    //   maxLength: 24,
    // },
  },
  required: [
    "name",
    "descriptions",
    "ingredients",
    "category",
    "image",
    "time",
    "portion",
  ],
  additionalProperties: false,
};
