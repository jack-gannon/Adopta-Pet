const express = require("express");
const auth = require("../utils/auth");
const petfinder = require("@petfinder/petfinder-js");
const router = express.Router();

// @route   GET api/data/types
// @desc    Get all pet types
// @access  Public
router.get("/types", async (req, res) => {
  req.client.animalData
    .types()
    .then(response => {
      res.json(response.data.types.map(type => type.name));
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

// @route   GET api/data/types/type
// @desc    Get details for pet type
// @access  Public
router.get("/types/:type", async (req, res) => {
  req.client.animalData
    .type(req.params.type)
    .then(response => {
      res.json(response.data.type);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

// @route   GET api/data/types/type/breeds
// @desc    Get breeds for pet type
// @access  Public
router.get("/types/:type/breeds", async (req, res) => {
  req.client.animalData
    .breeds(req.params.type)
    .then(response => {
      res.json(response.data.breeds.map(breed => breed.name));
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

module.exports = router;
