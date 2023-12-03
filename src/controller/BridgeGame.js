import Bridge from '../model/Bridge.js';
import Move from '../model/Move.js';
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

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#model = new Move();
  }

  async startGame() {
    this.#outputView.printStart();
    const bridge = await this.getBridge();

    await this.#move(bridge);
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
      const moving = await this.#handleError(() => this.#readMoving());

      this.#model.move(moving, bridge);
      this.#printBridgeState(this.#model.getBridgeState());
    }
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
   */
  retry() {}

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
