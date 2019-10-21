import React from 'react';
import md5 from 'md5'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Profile from './components/Profile'
import { Route } from 'react-router-dom'
import { getCharacters } from './services/api-helper'



// const publicKey = "6b79394eea2971a8a6c57a71423b9982"
// const privateKey = `c5d60e081bdfb4d54805ec75a69d077396dac95c`;

const publicKey = "78261c1de8c45815a8ff89f57cbef60e"
const privateKey = "523a61bbcbb1c0888fb38227dd0114be64a3d17c"
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      api: [],
      charID: ""
    }
  }

  componentDidMount = async () => {
    //   // for (let i = 0; i < 1500; i += 100) {
    //   //   const response = await getCharacters(i, publicKey, ts, hash)
    //   //   this.setState({
    //   //     api: response.data.data.results
    //   //   })
    //   // }
    const response = await getCharacters(0, publicKey, hash, ts)
    this.setState({
      api: response.data.data.results
    })
  }

  // componentDidUpdate = async () => {
  //   for (let i = 0; i < 1400; i += 100) {
  //     const response = await getCharacters(i, publicKey, ts, hash)
  //     this.setState(prevState => ({
  //       api: 
  //   response.data.data.result
  //      
  //     })
  //     )
  //   }
  // }





  // const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response2 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=100&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response3 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=200&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response4 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=300&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response5 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=400&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response6 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=500&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response7 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=600&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response8 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=700&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response9 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=800&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
  // const response10 = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&limit=100&offset=900&apikey=${publicKey}&hash=${hash}&ts=${ts}`)







  render() {

    return (
      <div className="App" >

        <Header />
        <Route exact path='/' render={() => (<Main listAPI={this.state.api} />)} />
        <Route path="/:id" render={(props) => (<Profile charId={props.match.params.id} />)} />
        <Footer />
      </div>
    );
  }
}

export default App;