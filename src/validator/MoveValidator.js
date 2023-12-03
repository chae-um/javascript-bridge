import { BRIDGE_ERROR_MESSAGE } from '../constant/BridgeGameMessage.js';
import { GAME_CODE_MOVE } from '../constant/BridgeGameOption.js';
import ValidationError from '../error/ValidationError.js';

const MoveValidator = Object.freeze({
  checkValidMove(move) {
    if (move !== GAME_CODE_MOVE.moveUp && move !== GAME_CODE_MOVE.moveDown) {
      throw new ValidationError(BRIDGE_ERROR_MESSAGE.notAValidMove);
    }
  },

  validateMove(move) {
    this.checkValidMove(move);
  },
});

export default MoveValidator;
