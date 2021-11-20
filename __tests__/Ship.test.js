const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('cruise ship', () => {
  describe('with ports and itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Dover',
        ships: [],
      };
      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Calais',
        ships: [],
      };
      itinerary = {
        ports: [dover, calais],
      };
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });

    it('is added to port on istantiation', () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });

    it('can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
      expect(ship.previousPort).toBe(dover); //added
    });

    it('can dock at a different port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
  });
});
