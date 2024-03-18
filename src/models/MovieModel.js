import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    poster: {
      type: String,
    },
    director: {
      type: String,
    },
    cast: {
      type: String,
    },
    genres: {
      type: [Schema.Types.ObjectId],
      ref: "Genre",
      required: true,
    },

    runingTime: {
      type: Number,
    },
    language: {
      type: String,
    },
    rated: {
      type: Number,
    },
    trailer: {
      type: String,
    },
    imgBanner: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
