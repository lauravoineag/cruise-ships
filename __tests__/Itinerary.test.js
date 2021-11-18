const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');
const Ship = require('../src/Ship');
const dover = new Port('Dover Port');
const calais = new Port('Calais');
const itinerary = new Itinerary([dover, calais]);

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });
});

describe('Itinerary', () => {
  it('itinerary ports to be array dover and calais', () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});

it('can set sail', () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();

  expect(ship.currentPort).toBeFalsy();
});
