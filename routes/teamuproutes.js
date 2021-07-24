const passport = require("passport");
const router = require("express").Router();
const express = require("express");
const teamupschema = require("../models/teamupschema");
const app = express();
app.use(express.static("public"));

const ensureAuth = (req, res, next) => {
  console.log("inside ensure auth");
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send("notloggedin");
  }
};

router.post("/submit", ensureAuth, (req, res) => {
  const data = new teamupschema({
    Name: req.user.Name,
    User_Id: req.user.id,
    Requirements: req.body.title,
    Skill: req.body.skill,
    Tag: req.body.tag,
    Description: req.body.description,
  });
  async function saving() {
    const result = await data.save();
  }
  saving();
  console.log(data);
  res.sendStatus(200);
});

router.get("/", ensureAuth, (req, res) => {
  async function getdata() {
    const data = await teamupschema.find();
    console.log(data);
    res.send(data);
  }
  getdata();
});

module.exports = router;
