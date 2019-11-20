import axios from 'axios'


// const privateKey = "c5d60e081bdfb4d54805ec75a69d077396dac95c"

///Gets a list of characters
export const getCharacters = async (limit = 80, offset = 0, publicKey, hash, ts) => {
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=${limit}&offset=${offset}&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  return request
}



///Gets character by id 
export const getCharacterId = async (charId, publicKey, hash, ts) => {
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${charId}?&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  return request
}


///Grabs the characters comics
export const getCharacterComics = async (charId, publicKey, hash, ts) => {
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${charId}/comics?apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  return request
}


///Grabs Character By Name
export const getCharacterByName = async (name, publicKey, hash, ts) => {
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  return request.data.data.results[0]
}


export const getSelectiveResponse = async (input, publicKey, hash, ts) => {
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&limit=100&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  return request
}


export const getRandomNumber = Math.floor(Math.random() * 1484)