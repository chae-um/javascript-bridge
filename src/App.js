import BridgeGame from './controller/BridgeGame.js';

class App {
  constructor() {
    this.controller = new BridgeGame();
  }

  async play() {
    await this.controller.startGame();
  }
}

export default App;
