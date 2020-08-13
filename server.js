const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
