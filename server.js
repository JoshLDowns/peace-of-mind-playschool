require("dotenv").config();
const express = require("express");
const path = require("path");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const app = express();
const port = process.env.PORT || 5000;

//cloudinary config setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

__dirname = path.resolve(path.dirname(""));

app.use(express.static(path.join(__dirname, "/client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/newContact", getMessage);
app.get("/playyard", getPlayYardPics);
app.get("/daycare", getDaycarePics);
app.get("/atplay", getAtPlayPics);

async function getMessage(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "inspireme1980@yahoo.com",
    from: email,
    subject: "New Contact from Peace of Mind Playschool Mail",
    text: `${message}\nFrom: ${name}`,
  };
  try {
    sgMail.send(msg);
    res.type("application/json").send(JSON.stringify({ status: "ok" }));
  } catch (err) {
    res.type("application/json").send(JSON.stringify({ status: err}));
  }
}

async function getPlayYardPics(req, res) {
  try {
    cloudinary.v2.search
      .expression("tags:playyard")
      .with_field("context")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute()
      .then((result) => res.type("application/json").send(result));
  } catch (err) {
    console.error(err);
    res.type("application/json").send(JSON.stringify({ error: err }));
  }
}

async function getDaycarePics(req, res) {
  try {
    cloudinary.v2.search
      .expression("tags:daycare")
      .with_field("context")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute()
      .then((result) => res.type("application/json").send(result));
  } catch (err) {
    console.error(err);
    res.type("application/json").send(JSON.stringify({ error: err }));
  }
}

async function getAtPlayPics(req, res) {
  try {
    cloudinary.v2.search
      .expression("tags:atplay")
      .with_field("context")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute()
      .then((result) => res.type("application/json").send(result));
  } catch (err) {
    console.error(err);
    res.type("application/json").send(JSON.stringify({ error: err }));
  }
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
