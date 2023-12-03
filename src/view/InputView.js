import { Console } from '@woowacourse/mission-utils';
import { validateEmptyString } from '../utils/validators/index.js';

const INPUT_MESSAGE = {
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameCommand: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  /**
   * @returns {Promise<string>}
   */
  async readBridgeSize() {
    const bridgeSize = await Console.readLineAsync(INPUT_MESSAGE.bridgeSize);

    validateEmptyString(bridgeSize);

    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @returns {Promise<string>}
   */
  async readMoving() {
    const moving = await Console.readLineAsync(INPUT_MESSAGE.moving);

    validateEmptyString(moving);

    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @returns {Promise<string>}
   */
  async readGameCommand() {
    const GameCommand = await Console.readLineAsync(INPUT_MESSAGE.gameCommand);

    validateEmptyString(GameCommand);

    return GameCommand;
  },
};

export default InputView;
