require("dotenv").config();
const { default: axios } = require("axios");
const { API_URL } = process.env;
const { Episode } = require("../db")

const getEpisodeAPI = async () => {
  const results = await axios.get(`${API_URL}episode`);

   const apiCharacter = await results.data.results.map((char) => {
    return {
      id: char.id,
      name: char.name,
      air_date: char.air_date,
      episode: char.episode,
      created: char.created,
    };
  });
  return apiCharacter; 
  
}; 

const allEpisodes = async ()=>{
    const Episodes = await getEpisodeAPI();
    let onlyNamesEpisodes = Episodes.map((epi)=>{
        return {
            episode: epi.name
        }
    })
    console.log(onlyNamesEpisodes)
    

  }



module.exports = {
    getEpisodeAPI,
    allEpisodes
}