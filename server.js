const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");

dotenv.config();

// cross-origin request security (CORS)
// prevents requests to unauthorized domains
// accept requests from the client
// app.use(cors());
//app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// Define middleware here //added need to test
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     `mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@ds129422.mlab.com:29422/heroku_zdr1rv5s`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
