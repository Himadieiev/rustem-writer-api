const { Schema, model } = require("mongoose");

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
};
