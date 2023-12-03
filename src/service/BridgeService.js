const BridgeGame = require('../BridgeGame.js');

const BridgeService = {
  createBridgeGame(size) {
    return BridgeGame.of(size);
  },

  /**
   * @param {BridgeGame} bridgeGame
   * @param {string} lane
   */
  processGame(bridgeGame, lane) {
    return bridgeGame.move(lane);
  },

  /**
   * @param {BridgeGame} bridgeGame
   */
  initBridge(bridgeGame) {
    bridgeGame.retry();
  },
};

module.exports = BridgeService;
