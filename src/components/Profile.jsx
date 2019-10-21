import React from 'react'
import { getCharacterId } from '../services/api-helper'
import md5 from 'md5'


const publicKey = "78261c1de8c45815a8ff89f57cbef60e"
const privateKey = "523a61bbcbb1c0888fb38227dd0114be64a3d17c"
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);


export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      api: [],
      charId: this.props.charId

    }
  }


  async componentDidMount() {
    const response = await getCharacterId(this.state.charId, publicKey, hash, ts)
    this.setState({
      api: response.data.data.results
    })
  }


  render() {
    console.log(this.state.api)
    const getChar = this.state.api.map(char => {
      return (
        <div key={char.id}>
          <img className="char-image" src={char.thumbnail.path + "." + char.thumbnail.extension} alt={char.name} />
          {console.log(char.name)}
        </div>
      )
    })
    return (
      <div>
        {getChar}
      </div>
    )


  }
}