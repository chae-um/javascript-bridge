const BridgeGame = require('../BridgeGame.js');
const InputView = require('../InputView.js');
const OutputView = require('../OutputView.js');
const ERRORS = require('../constants/errors.js');
const { RETRY_COMMAND } = require('../constants/system.js');
const ApplicationError = require('../exceptions/ApplicationError.js');
const BridgeService = require('../service/BridgeService.js');

class BridgeController {
  #view = {
    input: InputView,
    output: OutputView,
  };

  #service = {
    bridge: BridgeService,
  };

  start() {
    this.#printWelcome();
    this.#createBridgeGame();
  }

  #createBridgeGame() {
    this.#handleError(() => {
      this.#readBridgeSize((size) => {
        const bridgeGame = this.#service.bridge.createBridgeGame(Number(size));
        this.#processGame(bridgeGame);
      });
    });
  }

  #processGame(bridgeGame) {
    return this.#handleError(() => {
      this.#readMoving((lane) => {
        const { result, log } = this.#service.bridge.processGame(bridgeGame, lane);
        this.#printMap(log);
        if (!result) this.#processRetry(bridgeGame);
        if (result) this.#checkComplete(bridgeGame, log);
      });
    });
  }

  /**
   * @param {BridgeGame} bridgeGame
   * @param {boolean} log
   */
  #checkComplete(bridgeGame, log) {
    const { result: success, tryCount } = bridgeGame.isCompleted();
    if (!success) return this.#processGame(bridgeGame);

    return this.#printResult({
      success,
      tryCount,
      log,
    });
  }

  #processRetry(bridgeGame) {
    this.#handleError(() => {
      this.#readGameCommand((command) => {
        this.#validateRetryCommand(command);
        if (command === RETRY_COMMAND.RETRY) {
          this.#processRestart(bridgeGame);
        }
      });
    });
  }

  #processRestart(bridgeGame) {
    this.#service.bridge.initBridge(bridgeGame);
    this.#processGame(bridgeGame);
  }

  #readBridgeSize(handler) {
    this.#view.input.readBridgeSize(handler);
  }

  #readMoving(handler) {
    this.#view.input.readMoving(handler);
  }

  #readGameCommand(handler) {
    this.#view.input.readGameCommand(handler);
  }

  #printResult({ success, tryCount, log }) {
    this.#view.output.printResult({ success, tryCount, log });
  }

  #printWelcome() {
    this.#view.output.printWelcome();
  }

  #printMap(log) {
    this.#view.output.printMap(log);
  }

  #handleError(action) {
    try {
      return action();
    } catch ({ message }) {
      this.#view.output.error(message);
      return this.#handleError(action);
    }
  }

  #validateRetryCommand(command) {
    if (!Object.values(RETRY_COMMAND).includes(command)) {
      throw new ApplicationError(ERRORS.invalidRetryCommand);
    }
  }
}

module.exports = BridgeController;
