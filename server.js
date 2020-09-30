const express = require("express");
const mongoose = require("mongoose");
const videos = require("./dbModel.js");
const Data = require("./data.js");

//appConfig
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use((req,res,next) => {
res.setHeader("Allow-access-control-allow-origin", "*");
res.setHeader("Allow-access-control-allow-Headers", "*");
next();
});


//DB config
const connection_url =
  "mongodb+srv://admin:<Password>@cluster0.wm39w.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api Endpoints
app.get("/", (req, res) => res.status(200).send("Test Purpose - 1. /v1/posts/ 2. v2/posts/"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) =>
  videos.find((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
);

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//App listen
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
