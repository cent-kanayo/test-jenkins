const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1> Welcome To My Domain. I am going live real soon </h1> <h2>Stop playing with me</h2> <h5>This real, I go soon blow</h5>"
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server is now listening on port ${PORT}...`)
);
