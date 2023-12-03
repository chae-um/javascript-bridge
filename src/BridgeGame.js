import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import { BLANK, GAME_CODE_MOVE } from './constant/BridgeGameOption.js';
import BridgeSizeValidator from './validator/BridgeSizeValidator.js';
import GameCommandValidator from './validator/GameCommandValidator.js';
import MoveValidator from './validator/MoveValidator.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
export default class BridgeGame {
  #map;

  #move = {
    level: 0,
    map: [[], []],
    isPass: undefined,
    tryCount: 1,
  };

  constructor(size) {
    BridgeSizeValidator.validateBridgeSize(size);
    this.#map = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );

    console.log(this.#map);
  }

  static of(size) {
    return new BridgeGame(size);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(directionString) {
    const direction = this.#directionParse(directionString);

    this.#mapInitialize();

    if (this.#map[this.#move.level] === direction) {
      this.#move.map[direction].push(GAME_CODE_MOVE.moveAvailable);
      this.#move.isPass = true;
    } else {
      this.#move.map[direction].push(GAME_CODE_MOVE.moveUnavailable);
      this.#move.isPass = false;
    }
    this.#move.map[this.#move.map.length - 1 - direction].push(BLANK);
    this.#levelUp();

    return this.#move;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    GameCommandValidator.validateGameCommand(command);
    this.#move.tryCount += 1;
  }

  #directionParse(direction) {
    MoveValidator.checkValidMove(direction);

    if (direction === GAME_CODE_MOVE.moveUp) {
      return GAME_CODE_MOVE.moveUpNumber;
    }

    if (direction === GAME_CODE_MOVE.moveDown) {
      return GAME_CODE_MOVE.moveDownNumber;
    }
  }

  #mapInitialize() {
    if (!this.#move.isPass) {
      this.#move.map[GAME_CODE_MOVE.moveDownNumber].pop();
      this.#move.map[GAME_CODE_MOVE.moveUpNumber].pop();
    }
  }

  #levelUp() {
    if (this.#move.isPass) {
      this.#move.level += 1;
    }
  }
}
