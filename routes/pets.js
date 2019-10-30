const express = require("express");
const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});
const router = express.Router();

// @route   GET api/pets
// @desc    Get petså
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

module.exports = router;
