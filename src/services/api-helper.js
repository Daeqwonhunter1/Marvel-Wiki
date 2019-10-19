import axios from 'axios'


// const privateKey = "c5d60e081bdfb4d54805ec75a69d077396dac95c"


export const getCharacters = async (offset = 0, publicKey, ts, hash) => {
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=${offset}&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  return request
}
// for (offset = 0; offset < 1400) {
//   offset = +100
// }