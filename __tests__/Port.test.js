const Port = require('../src/Port.js');

describe('Port', () => {
  describe('with port', () => {
    let port;
    beforeEach(() => {
      port = new Port('Dover');
    });
    it('has name property', () => {
      expect(port.name).toBe('Dover');
    });

    it('can add a ship', () => {
      const ship = jest.fn();
      port.addShip(ship);
      expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
      const london = jest.fn();
      const liverpool = jest.fn();
      port.addShip(london);
      port.addShip(liverpool);
      port.removeShip(london);
      expect(port.ships).toEqual([london]);
    });
  });
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});
