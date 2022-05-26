const express = require("express");
const router = express.Router();
// import Movie from "../model/movie";
const data = require('../moviedetails.json')


router.get("/getmovie", async (req, res) => {

  return res.status(201).json(data);
});

router.post("/addmovie", async (req, res) => {
  try {
    if (!req.body.movie) {
      return res.status(401).json({ message: "invalid data" });
    }
    return res.status(201).json({ message: "Movie Details Added" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;