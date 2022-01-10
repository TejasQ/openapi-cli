import { Assertions } from '../.';

const opts = {
  '0': {
    on: [ 'Operation.summary' ],
    description: 'example warn text',
    severity: 'warn',
    pattern: '/example/'
  },
  '1': {
    on: [ 'PathItem.Operation.$keys' ],
    description: 'example warn text',
    severity: 'warn',
    mutuallyExclusive: [ 'summary', 'security' ]
  },
  '2': {
    on: [ 'PathItem.Operation.tags' ],
    description: 'example warn text',
    severity: 'warn',
    sortOrder: 'desc'
  },
  '3': {
    on: [ 'Foo.Bar.Baz.test' ],
    description: 'example warn text',
    severity: 'warn',
    sortOrder: 'desc'
  }
}

describe('Oas3 assertions', () => {
  it('should return the right visitor structure', () => {
    const visitors = Assertions(opts) as any;
    expect(visitors).toMatchInlineSnapshot(`
      Object {
        "Foo": Object {
          "Bar": Object {
            "Baz": [Function],
          },
        },
        "Operation": [Function],
        "PathItem": Object {
          "Operation": [Function],
        },
      }
    `)
  });
});