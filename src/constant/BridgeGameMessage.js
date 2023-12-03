import {
  BRIDGE_LENGTH,
  GAME_CODE_MOVE,
  GAME_CODE_RETRY,
} from './BridgeGameOption.js';

export const BRIDGE_NOTIFICATION_MESSAGE = Object.freeze({
  welcome: '다리 건너기 게임을 시작합니다.',
  enterBridgeSize: '\n다리의 길이를 입력해 주세요.\n',
  enterMovePosition: `\n이동할 칸을 선택해주세요. (위: ${GAME_CODE_MOVE.moveUp}, 아래: ${GAME_CODE_MOVE.moveDown})\n`,
  enterGameCommand: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_CODE_RETRY.retry}, 종료: ${GAME_CODE_RETRY.quit})\n`,
  mapResult: '\n최종 게임 결과',
});

export const BRIDGE_ERROR_MESSAGE = Object.freeze({
  notANumber: '다리의 길이는 숫자로 입력해주세요.',
  notAValidRange: `다리의 길이는 ${BRIDGE_LENGTH.min} ~ ${BRIDGE_LENGTH.max}까지 가능합니다.`,
  notAValidMove: `이동 입력은 ${GAME_CODE_MOVE.moveUp} 또는 ${GAME_CODE_MOVE.moveDown}만 입력해주세요.`,
  notAValidGameCommand: `재시작 입력은 ${GAME_CODE_RETRY.retry} 또는 ${GAME_CODE_RETRY.quit}만 입력해주세요.`,
});

export const BRIDGE_NOTIFICATION_FORMAT = Object.freeze({
  clearResult(isClear) {
    return `\n게임 성공 여부: ${isClear ? '성공' : '실패'}`;
  },
  tryResult(tryCount) {
    return `총 시도한 횟수: ${tryCount}`;
  },
});
