const { Router } = require("express");
const { getCharactersByID, createCharacter, getAllChar } = require("../controllers/character");
const router = Router();


router.get("/", getAllChar);

router.get("/:id", getCharactersByID );

router.post("/", createCharacter);

module.exports = router;