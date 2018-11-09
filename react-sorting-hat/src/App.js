import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import SortingHat from './components/SortingHat';

const sortingHatPhrases = [
  'Greetings, Wizard. I am the sorting hat.',
  'Are you ready to be sorted?',
  'Alright, here goes nothing.',
  'What would you do if there was a chicken terrorizing your house?'
]

class App extends Component {

  constructor() {

    super();

    this.state = {

      sortingHatText: sortingHatPhrases[0],
      sortingHatIndex: 0

    }

  }

  updateText = () => {

    this.setState({
      sortingHatIndex: this.state.sortingHatIndex + 1,
      sortingHatText: sortingHatPhrases[this.state.sortingHatIndex + 1]
    });

  }

  render() {
    return (
      <>
        <SortingHat text={this.state.sortingHatText} updateFunction={this.updateText}/>
      </>
    );
  }
}

export default App;
