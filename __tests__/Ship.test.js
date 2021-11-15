const Port = require('../src/Port');
const Ship = require('../src/Ship');
const port = new Port('London Port');
const ship = new Ship(port);

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('to have a starting port', () => {
    expect(ship.startingPort).toEqual('London Port');
  });
});

describe('Ship', () => {
  it('to set sail from staringPort', () => {
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});
