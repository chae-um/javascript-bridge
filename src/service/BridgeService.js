import BridgeGame from '../BridgeGame.js';
import { DIVIDER, GAME_CODE_MOVE } from '../constant/BridgeGameOption.js';

export default class BridgeService {
  #bridge;

  static of() {
    return new BridgeService();
  }

  createBridge(size) {
    this.#bridge = BridgeGame.of(size);
  }

  move(direction) {
    const { level, map, isPass, tryCount } = this.#bridge.move(direction);

    return {
      moveResult: [
        `[ ${map[GAME_CODE_MOVE.moveUpNumber].join(DIVIDER)} ]`,
        `[ ${map[GAME_CODE_MOVE.moveDownNumber].join(DIVIDER)} ]`,
      ],
      level,
      isPass,
      tryCount,
    };
  }

  retry(command) {
    this.#bridge.retry(command);
  }
}
