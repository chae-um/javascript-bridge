const BridgeController = require('./Controller/BridgeController');

class App {
  play() {
    const controller = new BridgeController();
    controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
