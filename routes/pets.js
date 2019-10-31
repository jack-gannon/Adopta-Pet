const express = require("express");
const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});
const router = express.Router();

// @route   GET api/pets
// @desc    Get pets
// @access  Public
router.get("/", async (req, res) => {
  client.animal
    .search()
    .then(response => {
      res.json(response.data.animals);
    })
    .catch(error => {
      console.log(error.message);
      res.json(error);
    });
});

// @route   GET api/pets/:params
// @desc    Get pets based on filter parameters
// @access  Public
router.get("/:params", async (req, res) => {
  const searchParams = req.params ? { ...req.params } : {};
  client.animal
    .search(searchParams)
    .then(response => {
      res.json(response.data.animals);
    })
    .catch(error => {
      console.log(error.message);
      res.json(error);
    });
});

module.exports = router;
