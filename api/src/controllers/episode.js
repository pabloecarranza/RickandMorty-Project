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

const allEpisodes = async (req, res)=>{
    const Episodes = await getEpisodeAPI();
   
      Episodes.forEach((episode)=>{
      if(Episode){
        Episode.findOrCreate({
          where: { 
            name : episode.name,
            air_date: episode.air_date,
            episode: episode.episode,
            created: episode.created,
          },
        })
      }
    }) 
    

    const allEpisodes = await Episode.findAll();
    res.send(allEpisodes)

  }



module.exports = {
    getEpisodeAPI,
    allEpisodes
}