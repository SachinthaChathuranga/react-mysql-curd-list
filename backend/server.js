const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react",
});

//display students
app.get("/students", (req, res) => {
  const sql = "select * from student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

//add students
app.post("/students", (req, res) => {
  // res.json('hello from Backend');
  const sql = "insert into student (name, email, age) values (?)";
  const values = [req.body.name, req.body.email, req.body.age];
  db.query(sql, [values], (err, result) => {
    if (err) {
      return res.json(err);
    }
    return res.json(result);
  });
});

//read a students detials
app.get("/read/:id", (req, res) => {
  const sql = "select * from student where id = ? ";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

//update students
app.put("/update/:id", (req, res) => {
  const sql = "update student set name = ?, email = ?, age = ? where id = ?";
  const id = req.params.id;
  db.query(
    sql,
    [req.body.name, req.body.email, req.body.age, id],
    (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json(result);
    }
  );
});

//delete students
app.delete("/delete/:id", (req, res) => {
  const sql = "delete from student where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ Message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("listening...");
});
