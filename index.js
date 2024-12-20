const { google } = require("googleapis");

//create Google Cloud Service account details.. (reference Readme)
const serviceAccount = require("./pokemon-app-a7c12-701e7bfbf13a.json");

const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/firebase.database",
  "https://www.googleapis.com/auth/firebase.messaging",
];

const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

jwtClient.authorize(function (error, tokens) {
  if (error) {
    console.log("Error making request to generate access token:", error);
  } else if (tokens.access_token === null) {
    console.log(
      "Provided service account does not have permission to generate access tokens"
    );
  } else {
    var accessToken = tokens.access_token;
    console.log("accessToken", accessToken);
  }
});
