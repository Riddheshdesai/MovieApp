const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  moviename: {}
});


const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;