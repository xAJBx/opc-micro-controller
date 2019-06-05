const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_LASTEST_QUERY = "SELECT * FROM PLC_AI ORDER BY id DESC LIMIT 6";

const connection = mysql.createConnection({
  host: "xxx.xxx.xxx.xxx", // enter in your applicable MySQL information
  user: "some user",
  password: "secret",
  database: "some database"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /AI to see PLC AI data");
});

// google sql unique constraint latest timestamp
app.get("/AI", (req, res) => {
  connection.query(SELECT_LASTEST_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results.sort((s1, s2) => s1.sensor_num - s2.sensor_num)
      });
    }
  });
});

app.listen(<some port>, "0.0.0.0", function() { // enter in your react front end port typiclly 80 on deployment
  console.log("Listening to port: <some port>");
});
