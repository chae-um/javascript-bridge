import SYSTEM from '../constants/System.js';

class Move {
  #bridgeState = {
    up: [],
    down: [],
  };

  #tryCount = 1;

  static EMPTY = ' ';

  getBridgeState(moving, bridge) {
    this.#move(moving, bridge);

    return this.#bridgeState;
  }

  /**
   * @param {string} moving 'U' or 'D'
   * @param {string[]} bridge
   */
  #move(moving, bridge) {
    const isUp = bridge[this.#bridgeState.up.length] === SYSTEM.up;

    if (this.#canMove(moving, bridge)) {
      this.#passProcess(isUp, moving);
    } else {
      this.#failProcess(isUp);
    }
  }

  #passProcess(isUp) {
    const upPush = this.#draw(isUp, SYSTEM.pass);
    const downPush = this.#draw(!isUp, SYSTEM.pass);

    this.#push(upPush, downPush);
  }

  #failProcess(isUp) {
    const upPush = this.#draw(!isUp, SYSTEM.fail);
    const downPush = this.#draw(isUp, SYSTEM.fail);

    this.#push(upPush, downPush);
  }

  #canMove(moving, bridge) {
    return moving === bridge[this.#bridgeState.up.length];
  }

  #draw(isUp, mark) {
    if (isUp) {
      return mark;
    }

    return Move.EMPTY;
  }

  #push(upPush, downPush) {
    this.#bridgeState.up.push(upPush);
    this.#bridgeState.down.push(downPush);
  }

  getTryCount() {
    return this.#tryCount;
  }

  retry() {
    this.#initializeBridgeState();
    this.#increaseCount();
  }

  #initializeBridgeState() {
    this.#bridgeState = {
      up: [],
      down: [],
    };
  }

  #increaseCount() {
    this.#tryCount += 1;
  }
}

export default Move;
