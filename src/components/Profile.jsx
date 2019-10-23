import React from 'react'
import { getCharacterId, getCharacterComics } from '../services/api-helper'
import md5 from 'md5'
import Header from './Header'
import ReturnCharacter from './ReturnCharacter'
import ReturnComics from './ReturnComics'


const publicKey = "78261c1de8c45815a8ff89f57cbef60e"
const privateKey = "523a61bbcbb1c0888fb38227dd0114be64a3d17c"
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);


export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      api: [],
      charId: this.props.charId,
      comic: [],
      valueId: this.props.charId2,
      name: this.props.charName,



    }
  }


  async componentDidMount() {
    const response = await getCharacterId(this.state.charId, publicKey, hash, ts)
    this.setState({
      api: response.data.data.results
    })
    const result = await getCharacterComics(this.state.charId, publicKey, hash, ts)
    this.setState({
      comic: result.data.data.results
    })


  }


  render() {

    // console.log(this.state.comic)
    // const getChar = this.state.api.map(char => {
    //   return (
    //     <div className="char-info" key={char.id}>
    //       <h1>{char.name}</h1>
    //       <img className="char-image" src={char.thumbnail.path + "." + char.thumbnail.extension} alt={char.name} />
    //       <div className="description">
    //         <p>{char.description}</p>

    //       </div>
    //     </div>
    //   )
    // })

    // const getComic = this.state.comic.map(comic => {
    //   return (
    //     <div id="comic-image">
    //       <img className="comics" src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic} />
    //     </div >
    //   )
    // })


    return (

      <div className="profile">
        <ReturnCharacter getChar={this.state.api} />
        <ReturnComics getComic={this.state.comic} />
        {/* {getChar} */}
        {/* {getComic} */}
        {/* <Header handleSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.value} /> */}

      </div >
    )


  }
}