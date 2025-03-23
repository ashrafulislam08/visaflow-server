const router = require("express").Router();
const mongoose = require("mongoose");
const visaSchema = require("../schemas/visaSchema");
const Visa = mongoose.model("Visa", visaSchema);
// get all visa
router.get("/", async (req, res) => {
  const visas = await Visa.find({});
  res.send(visas);
});

// get visa by id
router.get("/:id", async (req, res) => {
  try {
    const visa = await Visa.find({ _id: req.params.id });
    res.send(visa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update visa by id
router.put("/", async (req, res) => {
  try {
    const updatedTodo = req.body;
    await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: updatedTodo,
      }
    );

    res.status(200).send({
      message: "Successfully updated",
    });
  } catch (error) {
    console.log(error);
  }
});

// post a visa
router.post("/", (req, res) => {
  const newVisa = new Visa(req.body);
  newVisa
    .save()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete a visa
router.delete(":id", async (req, res) => {
  try {
    await Visa.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Successfully deleted visa" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
