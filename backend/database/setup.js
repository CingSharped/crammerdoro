require("dotenv").config();

const { MongoClient } = require("mongodb");

const connectionUrl = process.env.DB_URL;

const client = new MongoClient(connectionUrl);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected successfully 🚀");
  } catch (error) {
    console.log(error);
  }
};

connectDB()

module.exports = client;
