import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { handleValidationError } from '../error/index.js';

const GameCommandValidator = {
  RESTART: 'R',
  QUIT: 'Q',

  check(gameCommand) {
    if (gameCommand.length !== 1) {
      handleValidationError(ERROR_MESSAGE.length);
    }
    if (gameCommand !== this.RESTART && gameCommand !== this.QUIT) {
      handleValidationError(ERROR_MESSAGE.gameCommand(this.RESTART, this.QUIT));
    }
  },
};

export default GameCommandValidator;
