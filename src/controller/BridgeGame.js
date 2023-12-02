import Bridge from '../model/Bridge.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async startGame() {
    this.#outputView.printStart();
    const bridgeSize = await this.#handleError(() => this.#readBridgeSize());
  }

  async #readBridgeSize() {
    const bridgeSize = await this.#inputView.readBridgeSize();

    return Bridge.of(Number(bridgeSize));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

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
