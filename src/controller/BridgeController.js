import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import {
  BRIDGE_WIDTH,
  GAME_CODE_OPTION,
  GAME_CODE_RETRY,
} from '../constant/BridgeGameOption.js';
import BridgeService from '../service/BridgeService.js';

export default class BridgeController {
  #bridgeService = BridgeService.of();

  constructor() {
    OutputView.printWelcome();
  }

  static of() {
    return new BridgeController();
  }

  async start() {
    await this.#handleError(async () => {
      const bridgeSize = await InputView.readBridgeSize();

      this.#bridgeService.createBridge(bridgeSize);
    });

    this.#move();
  }

  async #handleError(action) {
    try {
      await action();
    } catch ({ message }) {
      OutputView.print(message);
      await this.#handleError(action);
    }
  }

  async #move() {
    await this.#handleError(async () => {
      const moveDirection = await InputView.readMoving();
      const { moveResult, level, isPass, tryCount } =
        this.#bridgeService.move(moveDirection);

      OutputView.printMap(moveResult);
      this.#check(level, isPass, moveResult, tryCount);
    });
  }

  async #check(level, isPass, moveResult, tryCount) {
    if (!isPass) {
      return this.#retry(moveResult);
    }

    if (level <= BRIDGE_WIDTH) {
      return this.#move();
    }

    return this.#result(GAME_CODE_OPTION.clear, moveResult, tryCount);
  }

  async #retry(moveResult) {
    await this.#handleError(async () => {
      const command = await InputView.readGameCommand();
      this.#bridgeService.retry(command);

      if (command === GAME_CODE_RETRY.retry) {
        return this.#move();
      }

      return this.#result(GAME_CODE_OPTION.fail, moveResult);
    });
  }

  #result(isClear, moveResult, tryCount) {
    OutputView.printResult(isClear, moveResult, tryCount);
  }
}
