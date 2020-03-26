const express = require("express");
const auth = require("../utils/auth");
const router = express.Router();
const formatSearchParams = require("../utils/formatSearchParams");
const restructurePetData = require("../utils/restructurePetData");

// @route   GET api/pets
// @desc    Get pets
// @access  Public
router.get("/", async (req, res) => {
  req.client.animal
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
  req.client.animal
    .search(formatSearchParams(req.params))
    .then(response => {
      console.log("search request:", formatSearchParams(req.params));
      res.json(response.data);
    })
    .catch(error => {
      console.log("BAD search request:", formatSearchParams(req.params));
      console.log(error.status);
      console.log(error.message);
      if (error.status === 401) {
        // Refreshes client if access token expires
        console.log("Attempting to reset petfinder client");
      }
      res.status(error.status).send({
        message: error.message,
        status: error.status,
        details: error.details
      });
    });
});

// @route   GET api/pets/pet/:id
// @desc    Get pet based on ID
// @access  Public
router.get("/pet/:id", async (req, res) => {
  req.client.animal
    .show(req.params.id)
    .then(response => restructurePetData(response.data.animal))
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      console.log(error.message);
      res.json(error);
    });
});

module.exports = router;
