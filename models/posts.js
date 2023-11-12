const { Schema, model } = require("mongoose");

const Joi = require("joi");

const addPostSchema = Joi.object({
  title: Joi.string().max(60).required().messages({
    "string.base": "The title must be a string",
    "string.max": "The title must be max 60",
    "any.required": "The title field a required",
  }),
  text: Joi.string().max(350).required().messages({
    "string.base": "The title must be a string",
    "string.max": "The title must be max 350",
    "any.required": "The title field a required",
  }),
  date: Joi.string().required().messages({
    "string.base": "The date must be a string",
    "any.required": "The date field a required",
  }),
});

const postSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: 60,
      required: true,
    },
    text: {
      type: String,
      maxLength: 350,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: [true, "created at is required"],
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    versionKey: false,
  }
);

const Post = model("post", postSchema);

module.exports = {
  Post,
  addPostSchema,
};
