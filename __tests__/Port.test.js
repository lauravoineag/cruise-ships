const Port = require('../src/Port');
const dover = new Port('Dover');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(dover).toBeInstanceOf(Object);
  });
});

describe('Port', () => {
  it('has a name', () => {
    expect(dover.name).toEqual('Dover');
  });
});
