import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.\n',
};

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  },

  printStart() {
    this.print(INPUT_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {object} bridgeState
   * @property {string[]} up - 다리 위의 상태
   * @property {string[]} down - 다리 아래의 상태
   */
  printMap(bridgeState) {
    const bridgeMapUp = this.convertBridgeMap(bridgeState.up);
    const bridgeMapDown = this.convertBridgeMap(bridgeState.down);

    this.print(bridgeMapUp);
    this.print(bridgeMapDown);
  },

  convertBridgeMap(arr) {
    return `[ ${arr.join(' | ')} ]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

export default OutputView;
