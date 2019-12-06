const petfinder = require("@petfinder/petfinder-js");
const axios = require("axios");
const DataCache = require("./cache");
let authCache = new DataCache(authClient, 60);

async function authClient() {
  var config = {
    url: "https://api.petfinder.com/v2/oauth2/token",
    method: "post",
    data: {
      grant_type: "client_credentials",
      client_id: process.env.API_KEY,
      client_secret: process.env.API_SECRET
    }
  };

  let token = await axios(config).then(res => res.data.access_token);
  let client = new petfinder.Client({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET
  });
  client.authenticate(token);
  return client;
}

async function auth() {
  let authorizedClient = await authCache.getData().then(response => {
    return response;
  });
  return authorizedClient;
}

module.exports = auth;
