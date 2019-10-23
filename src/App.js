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
      charID: "",
      val: '',
      charName: []
    }
  }

  ///Lists api data when on landing page
  componentDidMount = async () => {
    const response = await getCharacters(80, 0, publicKey, hash, ts)
    this.setState({
      api: response.data.data.results
    })

    //grabs name of char
  }


  handleChange = (event) => {
    this.setState({
      val: event.target.value
    })

  }


  render() {

    return (
      <div className="App" >

        <Header />
        {/* Allows main to be landing page */}
        <Route exact path='/' render={() => (<Main listAPI={this.state.api} />)} />
        <Route path="/:id" render={(props) => (<Profile charId={props.match.params.id} />)} />

        <Footer />
      </div>
    );
  }
}

export default App;