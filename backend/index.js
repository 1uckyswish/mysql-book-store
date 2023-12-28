import express from "express";
import mysql from "mysql2"; // Use mysql2 instead of mysql
import cors from "cors";

const app = express();

//*CONNECT YOUR SERVER TO YOUR APP
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Youngswish1",
  database: "book",
});



app.use(express.json())
app.use(cors());

//* ALERT THAT YOU ARE A SUCCESS CONNECTED
app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

//* SET A QUERY TO COLLECT ALL DATA FROM TABLE
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//* MAKE A POST TO THE DATABASE

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`, `price`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book Has been created");
  });
});

app.delete("/books/:id", (req, res)=>{
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q,[bookId], (err,data)=>{
     if (err) return res.json(err);
    return res.json(data);
  })
})


//*update data

app.put("/books/:id", (req, res)=>{
  const bookId = res.params.id;
  const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];

  db.query(q,[...values,bookId], (err,data)=>{
     if (err) return res.json(err);
    return res.json(data);
  })
})

app.listen(8800, () => {
  console.log("Backend is Live!");
});
