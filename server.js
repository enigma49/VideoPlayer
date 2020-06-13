var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var api = require("./server/routes/api");
const port = 3000;

var app = express();
app.use(express.static(path.join(__dirname, "dist/gmi")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/gmi/index.html"));
});

app.listen(port, function() {
  console.log("SERVER RUNNING on port: " + port);
});
