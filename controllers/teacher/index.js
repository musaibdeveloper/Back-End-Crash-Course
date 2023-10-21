import express from "express";

const router = express.Router();

router.get("/getallteacher", (req, res) => {
  try {
    res.status(200).json({ msg: "Get All Teacher" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server error" });
  }
});


export default router;