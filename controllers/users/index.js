import express from "express"

const router = express.Router();

router.get("/getallusers", (req, res) => {
    try {
        res.status(200).json({msg : "Get All users"})
    } catch (error) {
       res.status(500).json({msg: "Internal Server error"}) 
    }
})

router.post("/adduser", (req, res) => {
  try {
      let userData = req.body.isAlive;
      console.log(userData);
      res.status(200).json({msg : userData})
  } catch (error) {
    res.status(500).json({ msg: "Internal Server error" });
  }
});


export default router;