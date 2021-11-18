class Ship {
  constructor(startingPort) {
    this.startingPort = startingPort.name;
  }
  setSail() {
    this.startingPort = false;
  }
  dock(port) {
    this.startingPort = port;
  }
}
module.exports = Ship;
