import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    name: {
      type: String,
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
    // genres: ["65f7ec13b7b6e142083266b9", "65f7ec13b7b6e142083266b9"],
    genres: {
      type: [Schema.Types.ObjectId],
      ref: "Genre",
      require: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
