import { ERROR_MESSAGE } from '../../constants/Messages.js';
import SYSTEM from '../../constants/System.js';
import { handleValidationError } from '../error/index.js';

const GameCommandValidator = {
  check(gameCommand) {
    if (gameCommand.length !== 1) {
      handleValidationError(ERROR_MESSAGE.length);
    }
    if (gameCommand !== SYSTEM.restart && gameCommand !== SYSTEM.quit) {
      handleValidationError(ERROR_MESSAGE.gameCommand(SYSTEM.restart, SYSTEM.quit));
    }
  },
};

export default GameCommandValidator;
