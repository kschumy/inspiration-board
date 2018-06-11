import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      // cards: [
      //   {
      //     text:"foo",
      //     emoji:'grinning'
      //   },
      //   {
      //     text:"bar",
      //     emoji:'cry'
      //   }
      // ],
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/kirsten/cards')
      .then((response) => {
        console.log('inside shit');
        console.log(response.data);
        this.setState({
          cards: response.data
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
  }

  renderCardsList = () => {
    console.log('the fuck is wrong??');
    console.log(this.state.cards);
    return this.state.cards.map((card, index) => {
      console.log(card.card);
      return (
        <Card
          key={index}
          text={card.card.text}
          emoji={card.card.emoji}
        />
      )
    });
  };

  render() {
    return (
      <div className="board">
        {this.renderCardsList()}
        </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
