const Ship = require('../src/Ship');
const ship = new Ship('London Port');

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
