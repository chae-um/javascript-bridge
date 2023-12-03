const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./constants/messages.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {Function} handler
   * @returns {string}
   */
  readBridgeSize(handler) {
    return Console.readLine(MESSAGES.bridgeSize, handler);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {Function} handler
   * @returns {string}
   */
  readMoving(handler) {
    return Console.readLine(MESSAGES.moving, handler);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {Function} handler
   * @returns {string}
   */
  readGameCommand(handler) {
    return Console.readLine(MESSAGES.retry, handler);
  },
};

module.exports = InputView;
