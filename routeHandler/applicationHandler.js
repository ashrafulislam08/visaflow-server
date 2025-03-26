const express = require("express");
const applicationSchema = require("../schemas/applicationSchema");
const { default: mongoose } = require("mongoose");
const Application = mongoose.model("Application", applicationSchema);
const router = express.Router();

// get application visa;
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const applications = await Application.find({ applicant_email: email });
  res.send(applications);
});

// get a application by id
router.get("/applicant/:id", async (req, res) => {
  const application = await Application.findById({ _id: req.params.id });
  res.send(application);
});

// update a application by id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedApplicant = req.body;
    await Application.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updatedApplicant,
      }
    );

    res.status(200).send({
      message: "Successfully updated",
    });
  } catch (error) {
    console.log(error.message);
  }
});

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
