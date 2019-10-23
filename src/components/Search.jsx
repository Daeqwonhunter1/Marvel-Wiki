import React from 'react'
import { getCharacterByName, getSelectiveResponse } from '../services/api-helper'
import md5 from 'md5'
import { Route, withRouter } from 'react-router-dom'
import Profile from './Profile'




const publicKey = "78261c1de8c45815a8ff89f57cbef60e"
const privateKey = "523a61bbcbb1c0888fb38227dd0114be64a3d17c"
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      name: [],
      charName: "",

    }
  }

  handleChange = (event) => {
    this.setState({
      charName: event.target.value
    })

  }
  handleSubmit = async (event) => {
    event.preventDefault()

    const response = await getCharacterByName(this.state.charName, publicKey, hash, ts)
    this.setState({
      name: response,
      id: response.id
    })
    const { history } = this.props;
    history.push(`/${this.state.id}`)
  }


  autoComplete = async (event) => {
    const response = await getSelectiveResponse(this.state.charName, publicKey, hash, ts)
    this.setState({
      words: response.data.name
    })
  }

  render() {
    return (
      <div>

        <form onChange={this.autoComplete} onKeyDown={this.handleClick} onSubmit={this.handleSubmit} >
          <div className="autocomplete">
            <input type="search" name="search" placeholder="search..." onChange={this.handleChange} />
          </div>
        </form>
        {console.log(this.state.words)}
        {console.log(this.state.id)}

        {/* <Route path="/:searchname" render={() => <Profile charId2={this.state.id} />} /> */}
        <Route path="/:id" render={(props) => (<Profile charId={props.match.params.id} />)} />

      </div>
    )
  }
}

export default withRouter(Search)