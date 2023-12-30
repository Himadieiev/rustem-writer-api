const { Schema, model } = require("mongoose");
const Joi = require("joi");

const addChapterSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "The title must be a string",
    "any.required": "The title field a required",
  }),
  text: Joi.string().required().messages({
    "string.base": "The title must be a string",
    "any.required": "The title field a required",
  }),
});

const chapterSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: 60,
      required: true,
    },
    text: {
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

const Chapter = model("chapter", chapterSchema);

module.exports = {
  Chapter,
  addChapterSchema,
};
