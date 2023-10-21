import config from "config";
import express from "express";
//DB connect
import "./utils/dbconnect.js";
//Importing Controllers
import teacherRouter from "./controllers/teacher/index.js";
import UserRouter from "./controllers/users/index.js";

const app = express();

const PORT = config.get("PORT");

// Use od Json
app.use(express.json())

//Server check Route

app.get("/", (req, res) => {
  res.send(`Server is running on ${PORT}`);
});

/*
1.req.hostname ==> Server IP address
2.req.ip ===> Client IP
3.req.method ====> GET,POST,PUT, DELETE
4.req.params  ===> Take input from client in URLs



*/

app.get("/musaib", (req, res) => {
  console.log(req.params);
  res.send("Hello");
});

app.get("/class/:id", (req, res) => {
  let userInput = req.params.id;
  res.send(userInput);
});

// ----------------------------------------------------------------------

/*
res.send()
res.download // Download files.
res.redirect // 
res.json // stringify (Converts js objects to JSON);
res.status




*/

app.get("/suhail/:anything", (req, res) => {
  let userdata = req.params.anything;
  res.send(`<h1> ${userdata} <h1>`);
});
app.get("/download", (req, res) => {
  res.download("./wallpaper.jpg");
});

app.get("/google", (req, res) => {
  res.redirect("https://google.com");
});

app.get("/new", (req, res) => {
  let arr = {
    fname: "Musaib",
    age: 21,
  };

  res.json(arr);
});

app.get("/send", (req, res) => {
  try {
    res.status(200).json({ msg: "working" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server error" });
  }
});

// Students
// Teachers
// Admin
// Users

// GET ===> To Fetch and Display All The Data (Browser,PostMan)
// POST ===> To Add New Data in DB From Client (PostMan)
// PUT  ===> To Update The Exisitng Data From DB (PostMan)
// DELETE ===> Delete The Data From DB (PostMan)

app.use("/user", UserRouter);
app.use("/teacher", teacherRouter);


// Error Handler
app.use((req, res) => {
    res.status(404).json({msg : "Router not found"})
})

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
