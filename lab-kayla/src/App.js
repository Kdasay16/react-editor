import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      name: 'Kayla',
      words: 'I like cows',
      color: '#4B2840',
      photo: 'logo.svg'
    }
  }

  handleNamechange(value) {
    this.setState({ name: value })
  }
  handleWordsChange(value) {
    this.setState({ words: value })
  }

  handleColorChange(value) {
    this.setState({ color: value })
  }

  handlePhotoChange(value) {
    this.setState({ photo: value})
  }

  render() {
    const { name, words, color } = this.state

    return (
      <div className="userControl">
        <Controls words={words} color={color} name={name}
          onNameChange={name => this.handleNamechange(name)}
          onWordsChange={words => this.handleWordsChange(words)}
          onColorChange={color => this.handleColorChange(color)}
        />
        <Speak words={words} color={color} name={name} specialClass="weird" />
      </div>
    )
  }
}

class Controls extends Component {
  render() {
    const { name, words, color, onWordsChange, onColorChange, onNameChange} = this.props

    return(
      <div>
        <label className="name-label">
        name:
        <input name="name" value={name} onChange={({ target }) => onNameChange(target.value)} />
        </label>
        <br/>
        <label className="words-label">
          words:
          <input name="words" value={words} onChange={({ target }) => onWordsChange(target.value)} />
        </label>
        <br/>
        <label className="color-label">
          color:
          <input name="color" type="color" value={color} onChange={({ target }) => onColorChange(target.value)} />
        </label>
      </div>
    )
  }
}

class Speak extends Component {
  render() {
    const {name, words, color, specialClass} = this.props

    return(
      <div className={specialClass} style={{ color }}>
        <span>{words}</span>
        &nbsp;
        <span>{name}</span>
      </div>
    )
  }
}

export default App;
