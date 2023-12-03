import { Console } from '@woowacourse/mission-utils';
import { BRIDGE_NOTIFICATION_MESSAGE } from './constant/BridgeGameMessage.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readLine(message) {
    return Console.readLineAsync(message);
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return this.readLine(BRIDGE_NOTIFICATION_MESSAGE.enterBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return this.readLine(BRIDGE_NOTIFICATION_MESSAGE.enterMovePosition);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return this.readLine(BRIDGE_NOTIFICATION_MESSAGE.enterGameCommand);
  },
};

export default InputView;
