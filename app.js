var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(500, function() {
  console.log("listening on port 5000");
});
