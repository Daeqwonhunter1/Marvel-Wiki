import React from 'react';
import md5 from 'md5'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Profile from './components/Profile'
import { Route } from 'react-router-dom'
import { getCharacters, getRandomNumber } from './services/api-helper'




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
      charName: [],
      i: 80,
      j: 0,
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
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
  ///add the limit and offset of last state for new state
  ///limit,offset
  //b 92,80(Banshee,Butterfly)
  //c 100,172(Cable,Cypher)
  //d 78 272(D'ken,Dust)
  //e 33 350(Earthquake,Ezekiel Stane)
  //f 37 383(Fabian Cortez,Frog-Man)
  //g 56 420(Gabe Jones,Gwen Stacy)
  //h 70 476(Hammer,Hypno-Hustler)
  //i  38  546(Iceman,Ironclad)
  //j   44 584(James Jonah J,Justin Hammer)
  //k  34 628(Ka-Zar,Kylun)
  //l 54 662(La Nuit,Lyja)
  //m  100 716(Monet,Mister Sinister)
  //m   53    816(Mister Sinister(deadpool),Mystique(Ultimate) )
  //n  45    869(Nakia,Nuke)
  // o   20  914(Obadiah Stane,Ozymandias)
  // p  62    934(Paibok,Pyro)
  //q   9    996(Quake,QuickSilver)
  //r  59   1005(Rachel Grey,Russian)
  //s  100  1064(Shield,Sleeper)
  //s 97 1164(Sleepwalker,Synch)
  //t  93  1261(t'challa,Tyrannus)
  //u  21 1354(U-Foes,Unus)
  //v   32  1375(Valeria Rich,Vulture(Blackie))
  //w    57   1407(Wallflower,Wrecking crew)
  //x 15 1464(X-23,Xorn)
  //y 4 1479(Yellow claw,Young X-men)
  //z 11 1483(Zaladane,Zzzax)




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