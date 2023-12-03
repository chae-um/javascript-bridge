import BridgeController from './controller/BridgeController.js';

export default class App {
  play() {
    BridgeController.of().start();
  }
}

new App().play();
