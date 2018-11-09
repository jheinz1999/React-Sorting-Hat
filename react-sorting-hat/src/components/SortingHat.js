import React from 'react';
import TweenMax from 'gsap/TweenMax';

import './SortingHat.scss';

export default class SortingHat extends React.Component {

  constructor(props) {

    super();

    this.state = {

      currentText: '',
      doneWriting: false,
      buttonText: 'Continue'

    }

  }

  componentDidMount() {

    TweenMax.fromTo('.hat', 2, {opacity: 0, yPercent: '-25%'}, {opacity: 1, yPercent: '0%', onComplete: () => {

      TweenMax.to('.speech-bubble', 1, {opacity: 1, onComplete: () => {

        this.setState({

          currentText: ''

        }, () => this.updateText(0));

      }});

    }});

  }

  componentDidUpdate() {

    if (this.state.doneWriting && this.props.text != this.state.currentText)
      this.setState({doneWriting: false, currentText: ''}, () => this.updateText(0));

    if (this.props.text === 'Are you ready to be sorted?' && this.state.buttonText != 'Sort Me!')
      this.setState({buttonText: 'Sort Me!'});

    if (this.state.doneWriting && this.state.currentText === 'Alright, here goes nothing.') {
      this.setState({doneWriting: false}, () => {
        TweenMax.to('.hat', 1, {yPercent: '-20%'});
        TweenMax.to('.speech-bubble', 1, {yPercent: '0%', xPercent: '-10%', onComplete: this.props.updateFunction});
      });
    }

  }

  updateText(num) {

    if (num < this.props.text.length) {

      setTimeout(() => {

        this.setState({

          currentText: this.state.currentText + this.props.text.charAt(num)

        }, () => {
          this.updateText(num + 1)
        });

      }, 100);

    }

    else
      this.setState({doneWriting: true});

  }

  render() {

    return (

      <div className='sorting-hat'>

        <p>{this.props.text}</p>

        <div className='speech-bubble'>{this.state.currentText}</div>

        <img className='hat' src="img/sortinghat.png"></img>

        <button className={this.state.doneWriting ? 'visible' : null} onClick={this.props.updateFunction}>{this.state.buttonText}</button>

      </div>

    );

  }

}
