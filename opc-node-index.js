// AJB TODO:
// -expose Front_Stats' data effeciently for each use case (upvote, downvote, visits)
// -rethink data storage for Front_Stats ;;; make a single entry table that utilizes replace queryies rather than insert??? how to monitor growth rate then???

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_LASTEST_QUERY = "SELECT * FROM PLC_AI ORDER BY id DESC LIMIT 6";
const SELECT_LASTEST_DOWNCOUNT_QUERY = "SELECT * FROM stats ORDER BY id DESC";

const connection = mysql.createConnection({
  host: "xxx.xxx.xxx.xxx", // server IP
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

app.listen(some port, "0.0.0.0", function() {
  console.log("Listening to port: some port");
});
