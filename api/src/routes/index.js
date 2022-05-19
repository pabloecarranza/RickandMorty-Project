const express = require("express");

const router = express.Router();

router.use("/character", require("./character"));
router.use("/episode", require("./episode"));
 
module.exports = router;
