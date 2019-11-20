import React from 'react';
import md5 from 'md5'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Profile from './components/Profile'
import { Route } from 'react-router-dom'
import { getCharacters, getRandomNumber } from './services/api-helper'



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
      charName: [],
      i: 80,
      j: 0,
      
    }
  }

  ///Lists api data when on landing page
  componentDidMount = async () => {
    const response = await getCharacters(100, getRandomNumber, publicKey, hash, ts)

    this.setState({
      api: response.data.data.results,
      i: 92,
      j: 80
    })
    console.log(response.data.data.results)
    //grabs name of char
  }
  


  ///setstate of previous state 
  handleClick = async () => {
    const response = await getCharacters(this.state.i, this.state.j, publicKey, hash, ts)
    this.setState(prevState => {
      return {
        i: prevState.i + 20,
        j: prevState.j + 20
      }
    })
    this.handleClick2()
    console.log(response.data.data)
  }


  handleClick2 = async () => {
    const response = await getCharacters(this.state.i, this.state.j, publicKey, hash, ts)
    console.log(response.data.data)
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