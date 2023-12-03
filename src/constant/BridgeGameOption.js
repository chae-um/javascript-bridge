export const RANDOM_NUMBER_RANGE = Object.freeze({
  min: 0,
  max: 1,
});

export const BRIDGE_WIDTH = 2;

export const BRIDGE_LENGTH = Object.freeze({
  min: 3,
  max: 20,
});

export const DIVIDER = ' | ';

export const BLANK = ' ';

export const GAME_CODE_OPTION = Object.freeze({
  fail: 0,
  clear: 1,
});

export const GAME_CODE_MOVE = Object.freeze({
  moveUp: 'U',
  moveDown: 'D',
  moveUpNumber: 1,
  moveDownNumber: 0,
  moveAvailable: 'O',
  moveUnavailable: 'X',
});

export const GAME_CODE_RETRY = Object.freeze({
  retry: 'R',
  quit: 'Q',
});
