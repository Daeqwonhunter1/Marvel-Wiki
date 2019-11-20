import React from 'react'
import { getCharacterId, getCharacterComics } from '../services/api-helper'
import md5 from 'md5'
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
      charId: this.charId,
      comic: [],
    }
  }


  async componentDidMount() {
    const response = await getCharacterId(this.props.charId, publicKey, hash, ts)
    this.setState({
      api: response.data.data.results
    })
    const result = await getCharacterComics(this.props.charId, publicKey, hash, ts)
    this.setState({
      comic: result.data.data.results
    })

  }


  async componentDidUpdate(prevProps) {
    if (prevProps.charId !== this.props.charId) {
      const response = await getCharacterId(this.props.charId, publicKey, hash, ts)
      this.setState({
        api: response.data.data.results
      })
      const result = await getCharacterComics(this.props.charId, publicKey, hash, ts)
      this.setState({
        comic: result.data.data.results
      })
    }
  }


  render() {

    return (

      <div className="profile">

        <ReturnCharacter getChar={this.state.api} />
        <ReturnComics getComic={this.state.comic} />

      </div >
    )


  }
}