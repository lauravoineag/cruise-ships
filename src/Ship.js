class Ship {
  constructor(startingPort) {
    this.startingPort = startingPort.name;
  }
  setSail() {
    this.startingPort = false;
  }
}

module.exports = Ship;
