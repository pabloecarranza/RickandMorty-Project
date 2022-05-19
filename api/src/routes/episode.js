const { Router } = require("express");
const { allEpisodes } = require("../controllers/episode");

const router = Router();

router.get("/", allEpisodes);

module.exports = router;



