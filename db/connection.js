const mongoose = require("mongoose");
const url = "mongodb://mongo:27017/blogs-db";

mongoose.connect(url, { useNewUrlParser: true });

db = mongoose.connection;

db.once("open", () => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

module.exports = db;
