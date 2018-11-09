import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import SortingHat from './components/SortingHat';
import OptionButtonContainer from './components/OptionButtonContainer';

const sortingHatPhrases = [
  'Greetings, Wizard. I am the sorting hat.',
  'Are you ready to be sorted?',
  'Alright, here goes nothing.',
  'What would you do if there was a giant, evil, fire-breathing chicken terrorizing your house?'
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

  onTextDone = () => {

    

  }

  render() {
    return (
      <>
        <SortingHat text={this.state.sortingHatText} updateFunction={this.updateText} finishFunction={this.onTextDone}/>
        <OptionButtonContainer />
      </>
    );
  }
}

export default App;
