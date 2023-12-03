class Deck {
  static DEFAULT_STATE = ' ';

  /**
   * @protected
   */
  _state = Deck.DEFAULT_STATE;

  getState() {
    return this._state;
  }

  /**
   * @abstract
   */
  trampled() {}

  init() {
    this._state = Deck.DEFAULT_STATE;
  }
}

module.exports = Deck;
