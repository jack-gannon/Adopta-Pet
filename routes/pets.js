const express = require("express");
const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});
const router = express.Router();

const formatSearchParams = require("../utils/formatSearchParams");

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

// @route   GET api/pets/search/:zip.:city.:state.:type.:breed.:gender
// @desc    Get pets based on search parameters
// @access  Public
router.get("/search/:location.:type.:breed.:gender/:page", async (req, res) => {
  client.animal
    .search(formatSearchParams(req.params))
    .then(response => {
      console.log("search request:", formatSearchParams(req.params));
      res.json(response.data);
    })
    .catch(error => {
      console.log("BAD search request:", formatSearchParams(req.params));
      console.log(error.message);
      res.status(400).send(error.message);
    });
});

// @route   GET api/pets/pet/:id
// @desc    Get pet based on ID
// @access  Public
router.get("/pet/:id", async (req, res) => {
  client.animal
    .show(req.params.id)
    .then(response => {
      res.json(response.data.animal);
    })
    .catch(error => {
      console.log(error.message);
      res.json(error);
    });
});

module.exports = router;
