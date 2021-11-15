const Port = require('../src/Port');
const port = new Port('Dover');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });
});

describe('Port', () => {
  it('has a name', () => {
    expect(port.name).toEqual('Dover');
  });
});
