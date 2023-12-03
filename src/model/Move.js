class Move {
  #bridgeState = {
    up: [],
    down: [],
  };

  #tryCount = 0;

  static UP = 'U';

  static EMPTY = ' ';

  static PASS = 'O';

  static FAIL = 'X';

  getBridgeState(moving, bridge) {
    this.#move(moving, bridge);

    return this.#bridgeState;
  }

  /**
   * @param {string} moving 'U' or 'D'
   * @param {string[]} bridge
   */
  #move(moving, bridge) {
    const isUp = bridge[this.#bridgeState.up.length] === Move.UP;

    if (this.#canMove(moving, bridge)) {
      this.#passProcess(isUp, moving);
    } else {
      this.#failProcess(isUp);
    }
  }

  #passProcess(isUp) {
    const upPush = this.#draw(isUp, Move.PASS);
    const downPush = this.#draw(!isUp, Move.PASS);

    this.#push(upPush, downPush);
  }

  #failProcess(isUp) {
    const upPush = this.#draw(!isUp, Move.FAIL);
    const downPush = this.#draw(isUp, Move.FAIL);

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

  increaseCount() {
    this.#tryCount += 1;
  }

  getTryCount() {
    return this.#tryCount;
  }
}

export default Move;
