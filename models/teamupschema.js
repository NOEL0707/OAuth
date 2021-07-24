const mongoose = require("mongoose");
const teamupschema = new mongoose.Schema({
  Name: String,
  User_Id: mongoose.Schema.Types.ObjectId,
  Requirements: String,
  Skill: String,
  Tag: String,
  Description:String
});
const Form_data = mongoose.model("TeamupPost", teamupschema);

module.exports = Form_data;
