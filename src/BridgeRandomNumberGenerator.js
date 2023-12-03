import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_RANGE } from './constant/BridgeGameOption.js';

const BridgeRandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(
      RANDOM_NUMBER_RANGE.min,
      RANDOM_NUMBER_RANGE.max
    );
  },
};

export default BridgeRandomNumberGenerator;
