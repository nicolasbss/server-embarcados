var PORT = process.env.PORT || 5000;
var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(PORT, function() {
  console.log("listening");
});
