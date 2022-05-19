const { getCharactersByID, createCharacter, getAllChar } = require("../controllers/character");
const { Router } = require("express");
const router = Router();


router.get("/", getAllChar);

router.get("/:id", getCharactersByID );

router.post("/", createCharacter);

module.exports = router;