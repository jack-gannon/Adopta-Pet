const petfinder = require("@petfinder/petfinder-js");
const axios = require("axios");
const DataCache = require("./cache");
let authCache = new DataCache(authClient, 60);

async function authClient() {
  const config = {
    url: "https://api.petfinder.com/v2/oauth2/token",
    method: "post",
    data: {
      grant_type: "client_credentials",
      client_id: process.env.API_KEY,
      client_secret: process.env.API_SECRET
    }
  };

  const token = await axios(config).then(res => res.data.access_token);
  const client = new petfinder.Client({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET
  });
  client.authenticate(token);
  return client;
}

async function auth() {
  const authorizedClient = await authCache
    .getData()
    .then(response => {
      return response;
    })
    .catch(error => console.log(error));
  return authorizedClient;
}

module.exports = auth;
