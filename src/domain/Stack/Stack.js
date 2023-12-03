const Deck = require('../Deck/Deck.js');
const HardDeck = require('../Deck/HardDeck.js');

class Stack {
  /**
   * @type {Record<string, Deck>}
   */
  #lanes = {};

  /**
   * @param {{ name: string, deck: Deck }[]} lanes
   */
  constructor(lanes) {
    lanes.forEach(({ name, deck }) => {
      this.#lanes[name] = deck;
    });
  }

  static of(lanes) {
    return new Stack(lanes);
  }

  through(laneName) {
    const result = this.#lanes[laneName].trampled() === HardDeck.TRAMPLED_STATE;
    const stacks = Object.keys(this.#lanes).map((name) => this.#lanes[name].getState());

    return {
      result,
      stacks,
    };
  }

  init() {
    Object.keys(this.#lanes).forEach((lane) => {
      this.#lanes[lane].init();
    });
  }
}

module.exports = Stack;
