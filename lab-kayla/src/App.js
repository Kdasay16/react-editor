import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = {
      words: 'I like cows',
      color: '#4B2840',
      name: 'Kayla'
    }
  }

  handleWordsChange(value) {
    this.setState({ words: value })
  }

  handleColorChange(value) {
    this.setState({ color: value })
  }

  handleNamechange(value) {
    this.setState({ name: value })
  }

  render() {
    const { words, color, name } = this.state

    return (
      <div className="userControl">
        <Controls words={words} color={color} name={name}
          onWordsChange={words => this.handleWordsChange(words)}
          onColorChange={color => this.handleColorChange(color)}
          onNameChange={name => this.handleNamechange(name)}
        />
        
      </div>
    )
  }
}

export default App;
