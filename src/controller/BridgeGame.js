import SYSTEM from '../constants/System.js';
import Bridge from '../model/Bridge.js';
import Move from '../model/Move.js';
import GameCommandValidator from '../utils/validators/GameCommand.js';
import MovingValidator from '../utils/validators/Moving.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #inputView;

  #outputView;

  #model;

  static SUCCESS = '성공';

  static FAILURE = '실패';

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#model = new Move();
  }

  async startGame() {
    this.#outputView.printStart();
    const bridge = await this.getBridge();
    const result = await this.#move(bridge);

    this.#outputView.printResult(result, this.#model.getTryCount(), BridgeGame.SUCCESS);
  }

  async getBridge() {
    const bridgeSize = await this.#handleError(() => this.#readBridgeSize());
    const bridge = bridgeSize.makeBridge();

    return bridge;
  }

  async #readBridgeSize() {
    const bridgeSize = await this.#inputView.readBridgeSize();

    return Bridge.of(Number(bridgeSize));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {string[]} bridge
   */
  async #move(bridge) {
    while (true) {
      const bridgeState = await this.#getBridgeState(bridge);
      if (bridgeState.up.at(-1) === SYSTEM.fail || bridgeState.down.at(-1) === SYSTEM.fail) {
        await this.#retry(bridgeState, bridge);
        break;
      }
      if (bridgeState.up.length === bridge.length) return bridgeState;
    }
  }

  async #getBridgeState(bridge) {
    const moving = await this.#handleError(() => this.#readMoving());
    const bridgeState = this.#model.getBridgeState(moving, bridge);

    this.#printBridgeState(bridgeState);

    return bridgeState;
  }

  async #readMoving() {
    const moving = await this.#inputView.readMoving();

    MovingValidator.check(moving);

    return moving;
  }

  #printBridgeState(bridgeState) {
    this.#outputView.printMap(bridgeState);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param bridgeState
   * @param bridge
   */
  async #retry(bridgeState, bridge) {
    const gameCommand = await this.#handleError(() => this.#readGameCommand());

    if (gameCommand === SYSTEM.quit) {
      this.#outputView.printResult(bridgeState, this.#model.getTryCount(), BridgeGame.FAILURE);
    } else {
      this.#model.retry();
      await this.#move(bridge);
    }
  }

  async #readGameCommand() {
    const gameCommand = await this.#inputView.readGameCommand();

    GameCommandValidator.check(gameCommand);

    return gameCommand;
  }

  async #handleError(callback) {
    try {
      return await callback();
    } catch ({ message }) {
      this.#outputView.print(message);

      return this.#handleError(callback);
    }
  }
}

export default BridgeGame;
