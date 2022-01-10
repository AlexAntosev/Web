// Entry Point of the API Server

const express = require("express");
const path = require("path");

/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();
const router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "backend",
  password: "admin",
  dialect: "postgres",
  port: 5432,
});

/* To handle the HTTP Methods Body Parser 
   is used, Generally used to extract the 
   entire body portion of an incoming 
   request stream and exposes it on req.body 
*/
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

app.get("/collapses", (req, res, next) => {
  console.log("Collapses :");
  pool.query("Select * from collapses").then((testData) => {
    console.log(testData);
    res.send(testData.rows);
  });
});

app.post("/collapses-post", (req, res, next) => {
  console.log("Collapses :");
  pool.query(
    "Insert into collapses(count, content) values (1, '{}')"
  ).then(() => {});
});

// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  // Starting the Server at the port 3000
});
