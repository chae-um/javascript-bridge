import BridgeMaker from '../BridgeMaker.js';

export const ERROR_MESSAGE = Object.freeze({
  emptyString: '값을 입력해주세요.\n',
  number: '숫자만 입력할 수 있습니다.\n',
  integer: '정수만 입력할 수 있습니다.\n',
  numberScope: '다리의 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  length: '하나의 값만 입력이 가능합니다.',
  moving: `이동할 칸은 ${BridgeMaker.BRIDGE_UP} 또는 ${BridgeMaker.BRIDGE_DOWN}만 입력할 수 있습니다.`,
  gameCommand(a, b) {
    return `${a} 또는 ${b}만 입력할 수 있습니다.`;
  },
});
