const express = require("express");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken //maybe change needed;
  console.log("hi");
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "162e25f49215469b830106735c325599",
    clientSecret: "e2c1939946d348558324fb2f41fcd101",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
          accessToken: data.accessToken, // maybe to correct
          expiresIn: data.expiresIn // maybe to correct 
      })
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "162e25f49215469b830106735c325599",
    clientSecret: "e2c1939946d348558324fb2f41fcd101",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

app.listen(3001);
