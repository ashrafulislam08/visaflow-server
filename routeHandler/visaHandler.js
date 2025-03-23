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
router.get("/:id", (req, res) => {});

// update visa by id
router.put("/", (req, res) => {});

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

module.exports = router;
