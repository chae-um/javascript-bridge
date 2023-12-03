const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./constants/messages.js');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printWelcome() {
    Console.print(MESSAGES.welcome);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {number} width
   * @param {string[][]} log
   */
  printMap(log) {
    const width = log[0].length;
    Array.from({ length: width }, (_, idx) => {
      const lane = log.map((logItem) => logItem[idx]);
      return Console.print(`[ ${lane.join(' | ')} ]`);
    });
    Console.print('\n');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param root0
   * @param root0.success
   * @param root0.tryCount
   * @param root0.log
   */
  printResult({ success, tryCount, log }) {
    Console.print(MESSAGES.result);
    this.printMap(log);
    Console.print(success ? MESSAGES.success : MESSAGES.failed);
    Console.print(`${MESSAGES.tryCount} ${tryCount}`);
  },

  error(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
