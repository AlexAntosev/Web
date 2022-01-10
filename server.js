const express = require("express");
const path = require("path");
const cors = require('cors')

const app = express();
app.use(cors())
const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: "postgres://zegquqiacfirlx:d2c1923454278c4ff8ca9829f5ccb231c634ddef0c7cca35a830824eb911bedd@ec2-18-203-64-130.eu-west-1.compute.amazonaws.com:5432/den5hhgbgd7n85",
  ssl: { rejectUnauthorized: false }
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Connected to Database !");
  });
});

app.use(express.static(path.join(__dirname)));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/second-page", function (req, res) {
  res.sendFile(path.join(__dirname, "/second-page.html"));
});

app.get("/collapses", (req, res, next) => {
  pool.query("Select * from collapses").then((testData) => {
    res.send(testData.rows);
  });
});

app.post("/collapses-post", (req, res, next) => {
  pool
    .query(
      `Insert into collapses(count, content) values (${req.body.count}, '${req.body.content}')`
    )
    .then(() => res.send("success"));
});

app.put("/collapses-put", (req, res, next) => {
  pool
    .query(
      `Update collapses set count=${req.body.count}, content='${req.body.content}' where id = 1`
    )
    .then(() => res.send("success"));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  let host = server.address().address;
  let port = server.address().port;
});
