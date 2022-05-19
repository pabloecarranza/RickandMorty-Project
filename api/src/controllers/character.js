require("dotenv").config();
const { default: axios } = require("axios");
const { Character, Episode } = require("../db");
const { API_URL } = process.env;

const getCharactersAPI = async () => {
  const results = await axios.get(`${API_URL}character`);

  const apiCharacter = await results.data.results.map((char) => {
    return {
      id: char.id,
      name: char.name,
      status: char.status,
      species: char.species,
      gender: char.gender,
      origin: char.location.name,
      image: char.image,
    };
  });
  console.log(apiCharacter);
  return apiCharacter;
};

const getCharacterDB = async () => {
  await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCharacters = async () => {
  const apiInfo = await getCharactersAPI();
  const dataInfo = await getCharacterDB();
  const infoTotal = apiInfo.concat(dataInfo);
  return infoTotal;
};

//http://localhost:3001/character
const getAllChar = async (req, res) => {
  const name = req.body.name;
  let fullCharacters = await getAllCharacters();
  if (name) {
    let characterName = await fullCharacters.filter((char) =>
      char.name.toLowerCase().includes(name.toLowerCase())
    );
    characterName.length
      ? res.status(200).send(characterName)
      : res.status(404).send("no esta el personaje");
  } else {
    res.status(200).send(fullCharacters);
  }
};

const getCharactersByID = async function (req, res) {
  const { id } = req.params;
  const allCharacters = await getAllCharacters();
  let charID = allCharacters.find((char) => char.id == id);
  if (charID.id == id) {
    res.status(200).json(charID);
  } else {
    res.status(404).send("Character dont Exists");
  }
};

module.exports = {
  getAllCharacters,
  getAllChar,
  getCharactersByID,
};
