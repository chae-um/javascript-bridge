import { BRIDGE_ERROR_MESSAGE } from '../constant/BridgeGameMessage.js';
import { GAME_CODE_RETRY } from '../constant/BridgeGameOption.js';
import ValidationError from '../error/ValidationError.js';

const GameCommandValidator = Object.freeze({
  checkValidCommand(command) {
    if (command !== GAME_CODE_RETRY.quit && command !== GAME_CODE_RETRY.retry) {
      throw new ValidationError(BRIDGE_ERROR_MESSAGE.notAValidGameCommand);
    }
  },

  validateGameCommand(command) {
    this.checkValidCommand(command);
  },
});

export default GameCommandValidator;
