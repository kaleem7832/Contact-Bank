const mongoose = require("mongoose");
// const config=require('config');
// require('dotenv').config()

// const db=config.get('mongoURI');

//**PROTECT CREDS WITH THIS .ENV INSTEAD OF BRADS' DEFAULTJSON
const db =
  "mongodb+srv://kaleem:kaleem@cluster0.8kszcwb.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    console.log("Check Your ENV VAR");
    process.exit(1);
  }
};
module.exports = connectDB;
