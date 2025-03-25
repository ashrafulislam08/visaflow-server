const express = require("express");
const applicationSchema = require("../schemas/applicationSchema");
const { default: mongoose } = require("mongoose");
const Application = mongoose.model("Application", applicationSchema);
const router = express.Router();

// get application visa;
router.get("/", async (req, res) => {});

// get a application by id
router.get("/:id", async (req, res) => {});

// update a application by id
router.put("/:id", async (req, res) => {});

// post a application
router.post("/", async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.send(newApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete a application by id
router.delete("/:id", async (req, res) => {});

module.exports = router;
