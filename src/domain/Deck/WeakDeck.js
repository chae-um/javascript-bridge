const Deck = require('./Deck.js');

class WeakDeck extends Deck {
  /**
   * @readonly
   */
  static TRAMPLED_STATE = 'X';

  static of() {
    return new WeakDeck();
  }

  /**
   * @abstract
   */
  trampled() {
    this._state = WeakDeck.TRAMPLED_STATE;

    return this._state;
  }
}

module.exports = WeakDeck;
