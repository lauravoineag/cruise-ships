const Port = require('../src/Port');
const Ship = require('../src/Ship');
const ship = new Ship();
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('has a current port', () => {
    const port = new Port('Dover Port');
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toEqual(port);
  });
});

describe('Ship', () => {
  it('can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
  });
});

describe('Ship', () => {
  it('can dock to a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
});

it("can't sail further than its itinerary", () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();
  ship.dock();

  expect(() => ship.setSail()).toThrowError('End of itinerary reached');
});
