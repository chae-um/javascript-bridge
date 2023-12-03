const Deck = require('./Deck.js');

class HardDeck extends Deck {
  /**
   * @readonly
   */
  static TRAMPLED_STATE = 'O';

  static of() {
    return new HardDeck();
  }

  /**
   * @abstract
   */
  trampled() {
    this._state = HardDeck.TRAMPLED_STATE;

    return this._state;
  }
}

module.exports = HardDeck;
